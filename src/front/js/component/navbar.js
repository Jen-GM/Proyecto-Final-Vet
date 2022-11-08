import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../img/LogotipoPS.png";
import "../../img/navbar2.png";
import "../../styles/home.css";


export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg bg-light" id="navigation">
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
        <img src= "navbar2.png"
            alt="Logo"
            width="270"
            height="170" 
            className="fixed-bottom"/>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav p-5">
              <li className="nav-item border border-white rounded mx-2 border-opacity-75">
                <a className="nav-link px-4" href="#">
                  Nosotros
                </a>
              </li>
              <li className="nav-item border border-white rounded mx-4 border-opacity-75">
                <a className="nav-link px-4" href="#">
                  Contacto
                </a>
              </li>
              {sessionStorage.getItem("token") && (
                <Link to="/">
                  <li className="nav-item border border-white rounded mx-4 border-opacity-75">
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
