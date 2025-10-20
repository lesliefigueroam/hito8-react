import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function ProtectedRoute() {
  const { token } = useUser();
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}
