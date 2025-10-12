import { createContext, useContext, useState, useMemo } from "react";

// 1️⃣ Creamos el contexto (una “caja global”)
const CartContext = createContext();

// 2️⃣ Creamos un hook personalizado para usarlo fácilmente
export function useCart() {
  return useContext(CartContext);
}

// 3️⃣ Componente que envolverá toda la App
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  function addToCart(pizza) {
    setCart((prevCart) => {
      const found = prevCart.find((p) => p.id === pizza.id);
      if (found) {
        // Si ya está, aumentamos la cantidad
        return prevCart.map((p) =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        );
      } else {
        // Si no está, lo agregamos con count = 1
        return [...prevCart, { ...pizza, count: 1 }];
      }
    });
  }

  // Quitar producto completamente
  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((p) => p.id !== id));
  }

  // Cambiar cantidad (por + o -)
  function updateQuantity(id, amount) {
    setCart((prevCart) =>
      prevCart
        .map((p) => (p.id === id ? { ...p, count: p.count + amount } : p))
        .filter((p) => p.count > 0)
    );
  }

  // Calcular total del carrito
  const total = useMemo(() => {
    return cart.reduce((acc, p) => acc + p.price * p.count, 0);
  }, [cart]);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
