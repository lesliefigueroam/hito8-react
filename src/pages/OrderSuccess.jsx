// src/pages/OrderSuccess.jsx
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const order = state?.order;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body p-4 text-center">
              <div className="display-6 mb-3">🎉 ¡Gracias por tu compra!</div>
              {order ? (
                <>
                  <p className="text-muted">
                    Código de orden: <b>{order.id}</b> ·{" "}
                    {new Date(order.createdAt).toLocaleString()}
                  </p>

                  <hr />

                  <h5 className="mb-3">Resumen</h5>
                  <div className="table-responsive">
                    <table className="table align-middle">
                      <thead>
                        <tr>
                          <th>Producto</th>
                          <th className="text-center">Cant.</th>
                          <th className="text-end">Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.items?.map((it) => (
                          <tr key={it.id || it._id || it.name}>
                            <td>{it.name || it.title}</td>
                            <td className="text-center">
                              {it.qty ?? it.quantity ?? 1}
                            </td>
                            <td className="text-end">
                              $
                              {(
                                (it.price ?? 0) * (it.qty ?? it.quantity ?? 1)
                              ).toFixed(0)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={2} className="text-end fw-bold">
                            Total
                          </td>
                          <td className="text-end fw-bold">
                            ${Number(order.total ?? 0).toFixed(0)}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </>
              ) : (
                <p className="text-muted">
                  Tu pedido fue procesado. Si no ves detalles, vuelve al inicio.
                </p>
              )}

              <div className="d-flex gap-2 justify-content-center mt-4">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => navigate("/")}
                >
                  🏠 Ir al inicio
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/profile")}
                >
                  🔒 Ver perfil
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-muted small mt-3">
            Te enviaremos un correo con la confirmación de tu compra.
          </p>
        </div>
      </div>
    </div>
  );
}
