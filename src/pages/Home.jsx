import React from "react";
import Header from "../componentes/Header";
import CardPizza from "../componentes/CardPizza";
import { usePizzas } from "../context/PizzaContext";

const Home = () => {
  const { pizzas, loading, error } = usePizzas(); //  obtenemos datos del contexto

  if (loading) return <p className="text-center mt-4">Cargando pizzas...</p>;
  if (error) return <p className="text-center mt-4 text-danger">{error}</p>;
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
                id={pizza.id}
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
