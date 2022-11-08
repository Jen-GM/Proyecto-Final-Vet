import React, { useContext, useState, Component } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    await actions.login(email, password).then(() => navigate("/usuarios"));
  };

  return (
    <div className="text-center mt-5 text-success">
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
      <div></div>
      <a href="#" classname="btn btn-secondary">
        ¿Olvidaste tu contraseña?
      </a>
    </div>
  );
};
