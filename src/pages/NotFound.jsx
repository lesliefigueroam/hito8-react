import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404 — Página no encontrada</h1>
      <p>Lo sentimos, no encontramos lo que buscabas.</p>
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
}
