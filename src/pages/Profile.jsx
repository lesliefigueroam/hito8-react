import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Por ahora redirige a /login
    navigate("/login");
  };

  const user = {
    email: "usuario@example.com",
    avatar: "https://i.pravatar.cc/150?img=12", // imagen aleatoria para el perfil
    name: "Usuario Ejemplo",
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow text-center p-4">
            <img
              src={user.avatar}
              alt="Avatar"
              className="rounded-circle mx-auto mb-3"
              width="120"
              height="120"
            />
            <h3 className="mb-2">{user.name}</h3>
            <p className="text-muted mb-4">{user.email}</p>
            <button onClick={handleLogout} className="btn btn-danger w-100">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
