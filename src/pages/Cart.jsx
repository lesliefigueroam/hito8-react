import { useState } from "react";
//import { pizzaCart } from "../data/pizzas";
import { useCart } from "../context/CartContext";
import { formatearPrecio } from "../utils/helpers";
import { useUser } from "../context/UserContext";
import { API_BASE } from "../config";

//const API = "https://api-pizzas-eou9.onrender.com/api";

const Cart = () => {
  const { cart, updateQuantity, total } = useCart();
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
          Authorization: `Bearer ${token}`, // token del UserContext
        },
        body: JSON.stringify({ cart }),
      });
      if (!res.ok) {
        // Opcional: leer el error del backend
        let errMsg = "No se pudo procesar el pago";
        try {
          const errData = await res.json();
          if (errData?.message) errMsg = errData.message;
        } catch {}
        throw new Error(errMsg);
      }

      // éxito
      setMessage("✅ ¡Compra realizada con éxito!");
      // opcional: limpiar el carrito aquí si la pauta lo permite
      // clearCart();
    } catch (e) {
      setMessage(`❌ ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      {/* Si no hay productos */}
      {cart.length === 0 ? (
        <p className="text-center">Tu carrito está vacío 😢</p>
      ) : (
        <>
          {/* ... listado de items ... */}
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
                    disabled={loading} //  bloquear mientras paga
                  >
                    -
                  </button>
                  <span>{p.count}</span>
                  <button
                    className="btn btn-outline-success btn-sm ms-2"
                    onClick={() => updateQuantity(p.id, +1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4>Total: ${formatearPrecio(total)}</h4>
            <button
              className="btn btn-success"
              disabled={!isAuth || loading} // usa isAuth y respeta loading
              title={!isAuth ? "Debes iniciar sesión para pagar" : ""}
              onClick={handleCheckout} //  ahora sí llama al checkout real
            >
              {loading ? "Pagando..." : "Pagar"}
            </button>
          </div>
          {/* ✅ muestra feedback */}
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
