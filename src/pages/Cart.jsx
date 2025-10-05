import { useState } from "react";
import { pizzaCart } from "../data/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQty = (id) => {
    setCart(cart.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p)));
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((p) => (p.id === id ? { ...p, count: p.count - 1 } : p))
        .filter((p) => p.count > 0)
    );
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.count, 0);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
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
                <p className="mb-0">${p.price.toLocaleString("es-CL")}</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-outline-danger btn-sm me-2"
                onClick={() => decreaseQty(p.id)}
              >
                -
              </button>
              <span>{p.count}</span>
              <button
                className="btn btn-outline-success btn-sm ms-2"
                onClick={() => increaseQty(p.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h4>Total: ${total.toLocaleString("es-CL")}</h4>
        <button className="btn btn-success">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
