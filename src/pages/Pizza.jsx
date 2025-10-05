import { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza:", error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) return <p className="text-center mt-5">Cargando pizza...</p>;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <img src={pizza.img} alt={pizza.name} className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title text-center">{pizza.name}</h2>
              <p className="card-text">
                <strong>Precio:</strong> ${pizza.price.toLocaleString("es-CL")}
              </p>
              <p className="card-text">
                <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
              </p>
              <p className="card-text">
                <strong>Descripción:</strong> {pizza.desc}
              </p>
              <button className="btn btn-success w-100">
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
