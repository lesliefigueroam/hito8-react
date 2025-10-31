// src/context/CartContext.jsx
import { createContext, useContext, useState, useMemo } from "react";

// 1️⃣ Contexto
const CartContext = createContext(null);

// 2️⃣ Hook
export function useCart() {
  return useContext(CartContext);
}

// 3️⃣ Provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar
  function addToCart(pizza) {
    setCart((prev) => {
      const found = prev.find((p) => p.id === pizza.id);
      if (found) {
        return prev.map((p) =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        );
      }
      return [...prev, { ...pizza, count: 1 }];
    });
  }

  // Quitar item
  function removeFromCart(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  // Cambiar cantidad (+ / -)
  function updateQuantity(id, amount) {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, count: Math.max(0, p.count + amount) } : p
        )
        .filter((p) => p.count > 0)
    );
  }

  // 🔹 LIMPIAR CARRITO
  function clearCart() {
    setCart([]); // esto dispara re-render en Navbar y páginas que usan useCart()
  }

  // Totales
  const total = useMemo(
    () => cart.reduce((acc, p) => acc + p.price * p.count, 0),
    [cart]
  );

  // 🔹 Cantidad total (opcional pero útil para el Navbar)
  const count = useMemo(
    () => cart.reduce((acc, p) => acc + p.count, 0),
    [cart]
  );

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart, // ← expuesto
    total,
    count, // ← expuesto
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
