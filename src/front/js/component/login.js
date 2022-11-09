import React, { useContext, useState, Component } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import "../../img/perrogato.png";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    await actions.login(email, password).then(() => navigate("/usuarios"));
  };

  return (
    <div className="container-fluid" id="loginScreen">
      <div className="d-flex flex-column">
        <div className="d-flex p-2">
          <div className="text-center mt-5 text-success">
            <div>
              <h1> Iniciar sesión </h1>
              <div>
                <div className="d-grid gap-2 col-3 mx-auto">
                  <input
                    type="text"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2 col-3 mx-auto">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2 col-3 mx-auto">
                  <button className="btn btn-warning" onClick={handleClick}>
                    Acceder
                  </button>
                </div>
              </div>
            </div>
            <div></div>
            <a href="#" classname="btn btn-secondary">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
        <div className="d-flex">
          <img
            src="perrogato.png"
            alt="Perro y gato"
            width="860"
            height="704"
            className="align-self-end"
          />
        </div>
      </div>
    </div>
  );
};


