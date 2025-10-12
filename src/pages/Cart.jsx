//import { useState } from "react";
//import { pizzaCart } from "../data/pizzas";
import { useCart } from "../context/CartContext";
import { formatearPrecio } from "../utils/helpers";

const Cart = () => {
  const { cart, updateQuantity, total } = useCart();

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      {/* 2️⃣ Si no hay productos */}
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
            <button className="btn btn-success">Pagar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
