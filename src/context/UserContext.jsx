import { createContext, useContext, useState, useEffect } from "react";

const API = "https://api-pizzas-eou9.onrender.com/api";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const isAuth = Boolean(token);

  // persistir cuando cambie
  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
  }, [token]);

  useEffect(() => {
    if (email) localStorage.setItem("email", email);
    else localStorage.removeItem("email");
  }, [email]);

  const login = async (emailInput, password) => {
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailInput, password }),
    });
    if (!res.ok) throw new Error("Credenciales inválidas");
    const data = await res.json(); // { token, email }
    setToken(data.token);
    setEmail(data.email);
    return data;
  };

  const register = async (emailInput, password) => {
    const res = await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailInput, password }),
    });
    if (!res.ok) throw new Error("No se pudo registrar");
    const data = await res.json(); // { token, email }
    setToken(data.token);
    setEmail(data.email);
    return data;
  };

  const getProfile = async () => {
    if (!token) throw new Error("No autenticado");
    const res = await fetch(`${API}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("No se pudo obtener el perfil");
    const data = await res.json(); // { email: '...' , ... }
    if (data?.email) setEmail(data.email);
    return data;
  };

  const logout = () => {
    setToken("");
    setEmail("");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  return (
    <UserContext.Provider
      value={{ token, email, isAuth, login, register, getProfile, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
