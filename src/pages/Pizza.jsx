import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { formatearPrecio } from "../utils/helpers";

const Pizza = () => {
  // ✅ Captura el ID de la URL (ej: "p001") usando useParams
  const { id } = useParams();

  // ✅ Para agregar al carrito (tu lógica permanece igual)
  const { addToCart } = useCart();

  // ✅ Estado local para manejar la petición a la API por ID
  //    - pizza: almacena la pizza obtenida desde /api/pizzas/:id
  //    - loading: indica carga en curso
  //    - error: guarda mensaje si algo falla
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Requerimiento del Hito 7:
  //    Hacer una petición a la API usando el id capturado con useParams.
  //    Endpoint: GET /api/pizzas/:id
  useEffect(() => {
    let cancelado = false; // evita setState si el componente se desmonta

    const fetchPizza = async () => {
      try {
        setLoading(true);
        setError(null);

        // 📡 Petición a la API por ID
        const res = await fetch(
          `https://api-pizzas-eou9.onrender.com/api/pizzas/${id}`
        );
        // ✅ Manejo explícito de error 404 (pizza no encontrada)
        if (res.status === 404) {
          throw new Error("Pizza no encontrada en la base de datos 🍕");
        }
        // ✅ Manejo general de errores de red o respuesta inválida
        if (!res.ok) throw new Error("No se pudo obtener la pizza.");
        // ✅ Convertimos la respuesta en JSON solo si fue correcta
        const data = await res.json();
        if (!cancelado) setPizza(data);
      } catch (err) {
        if (!cancelado) setError(err.message || "Error al cargar la pizza.");
      } finally {
        if (!cancelado) setLoading(false);
      }
    };

    fetchPizza();
    // ♻️ Limpieza del efecto: marca como cancelado para evitar warning
    return () => {
      cancelado = true;
    };
  }, [id]);

  // 🟨 Estados de interfaz: carga / error / no encontrado
  if (loading) return <p className="text-center mt-5">Cargando pizza...</p>;
  if (error) return <p className="text-center mt-5 text-danger">{error}</p>;
  if (!pizza) return <p className="text-center mt-5">Pizza no encontrada 😢</p>;

  // ➕ Agregar la pizza al carrito (reutilizamos tu estructura)
  const handleAdd = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      img: pizza.img,
    });
  };

  // 🎨 Render: muestra la pizza obtenida desde la API
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
                <strong>Ingredientes:</strong>{" "}
                {Array.isArray(pizza.ingredients)
                  ? pizza.ingredients.join(", ")
                  : "—"}
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
