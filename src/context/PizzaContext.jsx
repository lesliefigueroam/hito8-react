import { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Creamos el contexto
const PizzaContext = createContext();

// 2️⃣ Creamos el proveedor del contexto
export function PizzaProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3️⃣ Fetch de las pizzas (solo una vez)
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch(
          "https://api-pizzas-eou9.onrender.com/api/pizzas"
        );
        if (!res.ok) throw new Error("Error al obtener pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  // 4️⃣ Pasamos los valores al resto de la app
  return (
    <PizzaContext.Provider value={{ pizzas, loading, error }}>
      {children}
    </PizzaContext.Provider>
  );
}

// 5️⃣ Custom hook para usarlo fácilmente
export const usePizzas = () => useContext(PizzaContext);
