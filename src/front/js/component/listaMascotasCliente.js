import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../img/perrin.jpg";

export const ListaMascotasCliente = () => {
  return (
    <div>
      {/* Esta parte es la información general de la/s mascota/s del cliente */}
      <div className="row p-2 rounded-1">
        <div className="col-sm-12 p-2 bg-dark text-white fs-4">
          <div className="row text-center">
            <div className="col">
              {" "}
              <img
                src="perrin.jpg"
                alt="Logo perrito"
                width="70"
                height="70"
                className="rounded-circle p-2"
              />
              <span className="ps-5">Bruno Castillo</span>
            </div>
            <div className="col pt-3">Perro</div>
            <div className="col pt-3">Sin raza</div>
          </div>
        </div>
      </div>
    </div>
  );
};
