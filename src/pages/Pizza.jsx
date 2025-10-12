import React from "react";
import { useParams } from "react-router-dom";
import { usePizzas } from "../context/PizzaContext";
import { useCart } from "../context/CartContext";
import { formatearPrecio } from "../utils/helpers";

const Pizza = () => {
  const { id } = useParams(); // Captura el ID de la URL (ej: p001)
  const { pizzas, loading, error } = usePizzas(); // Acceso global a las pizzas
  const { addToCart } = useCart(); // Para agregar al carrito

  if (loading) return <p className="text-center mt-5">Cargando pizza...</p>;
  if (error) return <p className="text-center mt-5 text-danger">{error}</p>;

  // Buscamos la pizza por su ID dentro del array global
  const pizza = pizzas.find((p) => p.id === id);

  if (!pizza) return <p className="text-center mt-5">Pizza no encontrada 😢</p>;

  const handleAdd = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      img: pizza.img,
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <img src={pizza.img} alt={pizza.name} className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title text-center">{pizza.name}</h2>
              <p className="card-text">
                <strong>Precio:</strong> ${formatearPrecio(pizza.price)}
              </p>
              <p className="card-text">
                <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
              </p>
              <p className="card-text">
                <strong>Descripción:</strong> {pizza.desc}
              </p>
              <button className="btn btn-success w-100" onClick={handleAdd}>
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
