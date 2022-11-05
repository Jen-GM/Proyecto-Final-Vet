import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import petlogo from "../../img/petlogo.jpg";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="../../img/petlogo.jpg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
        </a>
        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Nosotros
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contacto
                </a>
              </li>
              {sessionStorage.getItem("token") && (
                <Link to="/">
                  <li class="nav-item">
                    <a class="nav-link" onClick={() => actions.logout()}>
                      Salir
                    </a>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
