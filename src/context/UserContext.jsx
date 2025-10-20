import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  // Por defecto TRUE
  const [token, setToken] = useState(true);

  const logout = () => setToken(false);
  // (Opcional) un login simulado para pruebas
  const login = () => setToken(true);

  return (
    <UserContext.Provider value={{ token, logout, login }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
