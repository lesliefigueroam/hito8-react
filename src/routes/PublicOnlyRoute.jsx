import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function PublicOnlyRoute() {
  const { token } = useUser();
  return token ? <Navigate to="/" replace /> : <Outlet />;
}
