import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Página no encontrada</h2>
      <p className="text-muted mb-4">
        Lo sentimos, no encontramos lo que buscabas.
      </p>
      <Link to="/">
        <button className="btn btn-success">Volver al inicio</button>
      </Link>
    </div>
  );
}
