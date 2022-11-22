import React, { useContext, useState, Component } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "../../styles/home.css";
import "../../img/perrogato.png";
import "../../img/cat-error.png";

export const Login = () => {
  const Swal = require("sweetalert2");
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [ingreso, setIngreso] = useState(null);
  const navigate = useNavigate();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError("Formato de correo inválido");
      console.log(error);
    } else {
      setError(null);
    }
    setEmail(e.target.value);
  };

  const handleClick = async () => {
    await actions.loginType(email, password).then(() =>{
      if (store.tipoUsuario === 1){
        navigate("/calendar");
      }else{
        navigate("/profile");
      }
    })
  };

  return (
    <div>
      <div className="container-fluid mb-0" id="loginScreen">
        <div className="d-grid grid-column">
          <div className="d-grid align-self-center m-0 my-3 p-0">
            <div className="text-center mt-5 text-success">
              <div>
                <h1 className="text-rigth"> Iniciar sesión </h1>
                <div>
                  <div className="d-grid gap-2 col-3 mx-auto">
                    <input
                      className="fs-5 my-2"
                      type="text"
                      placeholder="Correo"
                      value={email}
                      onChange={handleChange}
                    />{" "}
                    {error && (
                      <h5
                        style={{
                          color: "red",
                          paddingBottom: "0.5rem",
                          display: "block",
                        }}
                      >
                        {error}
                      </h5>
                    )}
                  </div>
                  <div className="d-grid gap-2 col-3 mx-auto">
                    <input
                      className="fs-5"
                      type="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2 col-3 mx-auto">
                    <button
                      className="btn btn-warning fs-5 mt-2"
                      onClick={handleClick}
                    >
                      Acceder
                    </button>
                  </div>
                </div>
              </div>
              <div></div>
              <a href="#" className="fs-5">
                ¿Olvidaste la contraseña?
              </a>
            </div>
          </div>
          <div className="d-grid align-self-end">
            <div className="text-center ps-5 ms-5">
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
      </div>
    </div>
  );
};
