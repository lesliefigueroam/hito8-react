import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../data/pizzas";

const Home = () => {
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
