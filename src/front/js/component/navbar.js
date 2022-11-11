import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../img/LogotipoPS.png";
import "../../img/navbar2.png";
import "../../img/dogs.png";


export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-sm bg-light " id="navigation">
      <div className="container-fluid">
        <a className="navbar-brand ms-5 ps-2" href="/">
          <img
            src= "LogotipoPS.png"
            alt="Logo"
            width="150"
            height="140" 
            className="d-inline-block align-text-top"
            />
        </a>
        <div>
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
          <div className="collapse navbar-collapse" id="#navbarNav">
            <ul className="navbar-nav p-5">
              <li className="nav-item border border-white rounded mx-3 border-opacity-75 shadow-lg">
                <a className="nav-link px-4" href="/#bgBeneficios">
                  Beneficios
                </a>
              </li>
              <li className="nav-item border border-white rounded mx-3 border-opacity-75">
                <a className="nav-link px-4" href="#aboutUs">
                  Nosotros
                </a>
              </li>
              <li className="nav-item border border-white rounded mx-3 border-opacity-75">
                <a className="nav-link px-4" href="#contactUs">
                  Contacto
                </a>
              </li>
              {sessionStorage.getItem("token") && (
                <Link to="/">
                  <li className="nav-item border border-white rounded mx-3 border-opacity-75">
                    <a className="nav-link" onClick={() => actions.logout()}>
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
