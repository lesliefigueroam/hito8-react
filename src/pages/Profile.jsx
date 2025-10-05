import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // por ahora puede ser estático; redirigimos a /login
    // en hitos posteriores implementarás la limpieza de auth
    navigate("/login");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Mi perfil</h1>
      <p>
        <strong>Email:</strong> usuario@example.com
      </p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}
