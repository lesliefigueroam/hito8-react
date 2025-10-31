import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // se importa el hook
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { total } = useCart(); // se obtiene el total global
  const { isAuth, logout } = useUser();

  return (
    <div className="container">
      <nav className=" navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Pizzería Mamma Mia
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <div className="navbar-nav me-auto">
              <div className="ms-auto d-flex  gap-2 ">
                <Link className="btn btn-outline-light" to="/">
                  🍕 Home
                </Link>

                {isAuth ? (
                  <>
                    <Link className="btn btn-outline-light" to="/profile">
                      🔓 Profile
                    </Link>
                    <button onClick={logout} className="btn btn-outline-light">
                      🔒 Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link className="btn btn-outline-light" to="/login">
                      🔐 Login
                    </Link>
                    <Link className="btn btn-outline-light" to="/register">
                      🔐 Register
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="ms-lg-3 mt-2 mt-lg-0">
              <Link to="/cart" className="btn btn-outline-info">
                🛒 Total: ${total.toLocaleString()}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
