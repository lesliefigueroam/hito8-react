import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatearPrecio } from "../utils/helpers";
import { useUser } from "../context/UserContext";
import { API_BASE } from "../config";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, total, clearCart } = useCart(); // clearCart opcional si existe
  const { token, isAuth } = useUser();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!isAuth) return;

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch(`${API_BASE}/checkouts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!res.ok) {
        let errMsg = "No se pudo procesar el pago";
        try {
          const errData = await res.json();
          if (errData?.message) errMsg = errData.message;
        } catch {}
        throw new Error(errMsg);
      }

      // éxito backend -> intenta leer datos (opcional)
      const data = await res.json().catch(() => null);

      // 1) mensaje en el Cart (como ahora)
      setMessage("✅ ¡Compra realizada con éxito!");

      // 2) arma el resumen para la pantalla de éxito
      const order = {
        id:
          data?.orderId ||
          data?._id ||
          data?.id ||
          Math.random().toString(36).slice(2, 10).toUpperCase(),
        createdAt: data?.createdAt || new Date().toISOString(),
        items: cart,
        total: typeof data?.total === "number" ? data.total : total,
      };

      // espera 1.2s para que el usuario vea el mensaje y redirige
      setTimeout(() => {
        clearCart?.(); //  limpia el carrito
        navigate("/order-success", { state: { order } });
      }, 1200);
    } catch (e) {
      setMessage(`❌ ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p className="text-center">Tu carrito está vacío 😢</p>
      ) : (
        <>
          <div className="list-group">
            {cart.map((p) => (
              <div
                key={p.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="me-3"
                    style={{ width: "80px", borderRadius: "8px" }}
                  />
                  <div>
                    <h5 className="mb-1">{p.name}</h5>
                    <p className="mb-0">${formatearPrecio(p.price)}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-danger btn-sm me-2"
                    onClick={() => updateQuantity(p.id, -1)}
                    disabled={loading}
                  >
                    -
                  </button>
                  <span>{p.count}</span>
                  <button
                    className="btn btn-outline-success btn-sm ms-2"
                    onClick={() => updateQuantity(p.id, +1)}
                    disabled={loading}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4>Total: ${formatearPrecio(total)}</h4>
            {!isAuth && cart.length > 0 && (
              <div
                className="alert alert-warning mt-3 text-center"
                role="alert"
              >
                🔐 Para proceder con el pago debes iniciar sesión o crear una
                cuenta.
              </div>
            )}
            <button
              className="btn btn-success"
              disabled={!isAuth || loading || cart.length === 0}
              title={!isAuth ? "Debes iniciar sesión para pagar" : ""}
              onClick={handleCheckout}
            >
              {loading ? "Pagando..." : "Pagar"}
            </button>
          </div>

          {/* ✅ Mantiene el mensaje de éxito/errores en el Cart */}
          {message && (
            <div className="alert alert-info mt-3" role="alert">
              {message}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
