import React, { useContext, useState, Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  

  const handleClick = () => {
    const opts = {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch(
      opts
        .then((resp) => {
          if (resp.status === 200) return resp.json();
          else alert("ha habido un error");
        })
        .then()
        .catch((error) => {
          console.error("Hay un error !!", error);
        })
    );
  };

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