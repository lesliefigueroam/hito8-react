import React from "react";
import { formatearPrecio } from "../utils/helpers";
import { useCart } from "../context/CartContext";

function CardPizza(props) {
  const { addToCart } = useCart(); // usamos la función del Context

  // Armamos un objeto pizza con los datos que queremos guardar
  const pizza = {
    id: props.id,
    name: props.name,
    price: props.price,
    img: props.img,
  };

  return (
    <div className="card h-100 shadow-sm" style={{ width: "21rem" }}>
      <img src={props.img} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h6>Ingredientes:</h6>
          <ul className="mb-0">
            {props.ingredients.map((ing, i) => (
              <li key={i}>🍕 {ing}</li>
            ))}
          </ul>
        </li>
      </ul>
      <div className="card-body">
        <div className="row">
          <p className="fw-bold mb-1">Precio:</p>
          <p>${formatearPrecio(props.price)}</p>
          <div className="col d-flex justify-content-center">
            <button type="button" className="btn btn-light px-4">
              Ver más
            </button>
          </div>
          <div className="col d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-success px-4"
              onClick={() => addToCart(pizza)}
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
