import React from "react";
import Header from "../componentes/Header";
import CardPizza from "../componentes/CardPizza";
//import { pizzas } from "../data/pizzas";
import { useState, useEffect } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al cargar las pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div>
      <Header />
      <main className="container my-4">
        <section className="row justify-content-center">
          {pizzas.map((pizza) => (
            <div
              key={pizza.id}
              className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
            >
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
