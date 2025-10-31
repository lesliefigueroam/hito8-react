import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

export default function Profile() {
  const { email, getProfile, logout } = useUser();
  const [loading, setLoading] = useState(false);
  const [serverEmail, setServerEmail] = useState(email);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        setLoading(true);
        const me = await getProfile(); // GET /auth/me
        if (me?.email) setServerEmail(me.email);
      } catch (e) {
        // opcional: mostrar error o forzar logout si 401
      } finally {
        setLoading(false);
      }
    };
    fetchMe();
  }, []);

  return (
    <div className="container py-4">
      <h2>Perfil</h2>
      {loading ? (
        <p>Cargando perfil...</p>
      ) : (
        <p>
          <b>Email:</b> {serverEmail}
        </p>
      )}
      <button className="btn btn-danger" onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
}
