// src/pages/Profile.jsx
import { useEffect, useMemo, useState } from "react";
import { useUser } from "../context/UserContext";

export default function Profile() {
  const { email, getProfile, logout } = useUser();
  const [serverEmail, setServerEmail] = useState(email || "");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  // Nombre derivado del email si el backend no lo entrega
  const fallbackName = useMemo(() => {
    if (!serverEmail) return "Usuario";
    const base = serverEmail.split("@")[0];
    return base
      .replace(/[._-]+/g, " ")
      .split(" ")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join(" ");
  }, [serverEmail]);

  // Avatar simple (sin superposiciones)
  const avatarUrl = useMemo(() => {
    const display = name || fallbackName;
    return `https://i.pravatar.cc/150?img=31/api/?name=${encodeURIComponent(
      display
    )}&background=random&size=256`;
  }, [name, fallbackName]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const me = await getProfile(); // ✅ pauta
        if (me?.email) setServerEmail(me.email);
        if (me?.name) setName(me.name);
      } finally {
        setLoading(false);
      }
    })();
  }, [getProfile]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow text-center p-4">
            {/* Avatar */}
            <img
              src={avatarUrl}
              alt="Avatar"
              className="rounded-circle mx-auto mb-3"
              width="120"
              height="120"
              style={{ objectFit: "cover", background: "#f8f9fa" }}
            />

            {/* Nombre y email */}
            {loading ? (
              <>
                <div className="placeholder-glow mb-2">
                  <span className="placeholder col-6"></span>
                </div>
                <div className="placeholder-glow mb-4">
                  <span className="placeholder col-8"></span>
                </div>
              </>
            ) : (
              <>
                <h3 className="mb-2">{name || fallbackName}</h3>
                <p className="text-muted mb-4">{serverEmail || "—"}</p>
              </>
            )}

            {/* Único botón requerido */}
            <button onClick={logout} className="btn btn-danger w-100">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
