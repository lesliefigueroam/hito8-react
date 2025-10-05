import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <div className="container">
      <nav className=" navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Pizzería Mamma Mia
          </a>
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

                {token ? (
                  <>
                    <Link className="btn btn-outline-light" to="/profile">
                      🔓 Profile
                    </Link>
                    <button className="btn btn-outline-light">🔒 Logout</button>
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
