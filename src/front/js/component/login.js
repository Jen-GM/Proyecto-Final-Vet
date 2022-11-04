import React, { useContext, useState, Component } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const  [email, setEmail]  = useState("");
  const  [password, setPassword]  = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    actions.login(email, password);
  };

  if(store.token && store.token != "" && store.token != undefined) navigate("/usuarios");

  return (
    <div className="text-center mt-5">
      <h1> Login </h1>
      <div>
        <div className="d-grid gap-2 col-3 mx-auto">
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className="d-grid gap-2 col-3 mx-auto">
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className="d-grid gap-2 col-3 mx-auto">
        <button className="btn btn-primary" onClick={handleClick}>Login</button>
        </div>
      </div>
      <div>
      </div>
      <a href="#" classname="btn btn-primary">
        olvidaste tu contraseña?
      </a>
    </div>
  );
};
