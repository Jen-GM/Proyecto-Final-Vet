import React, { useState, useEffect, useContext, Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../img/perrin.jpg";

export const ListaMascotasCliente = () => {
  const [key, setKey] = useState("expediente");

  return (
    <div>
      {/* Esta parte es la de los animales */}
      <div className="row p-2">
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
      {/* Esta parte son los tabs con la informacion medica del animal */}
      <div>
        <Tabs
          defaultActiveKey="expediente"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="expediente" title="Expediente">
            Lo que sea
          </Tab>
          <Tab eventKey="vacunacion" title="Vacunación">
            Lo que sea pero vacunado
          </Tab>
          <Tab eventKey="desparasitacion" title="Desparasitación">
            Ya sin bichos lo que sea en serio
          </Tab>
        </Tabs>
      </div>

      {/* <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item3">
              <a className="nav-link" href="expediente">
                Expediente
              </a>
            </li>
            <li className="nav-item1">
              <a className="nav-link" href="vacunacion">
                Vacunacion
              </a>
            </li>
            <li className="nav-item2">
              <a className="nav-link active" aria-current="true" href="desparasitacion">
                Desparasitacion
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="mx-5 d-flex justify-content-center">
            <table className="table table-hover  m-3 p-1">
              <thead>
                <tr>
                  <th scope="col">Peso</th>
                  <th scope="col">Nombre Vacuna</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Fecha de aplicacion</th>
                  <th scope="col">Fecha de siguiente aplicacion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>50kg</td>
                  <td>Parvovirosis</td>
                  <td>GOURMET MON PETIT</td>
                  <td>21/11/2022</td>
                  <td>25/11/2022</td>
                </tr>
                <tr>
                  <td>60kg</td>
                  <td>Pentavalente</td>
                  <td>GOURMET MON PETIT</td>
                  <td>21/11/2022</td>
                  <td>25/11/2022</td>
                </tr>
                <tr>
                  <td>30kg</td>
                  <td>Rabia</td>
                  <td>GOURMET MON PETIT</td>
                  <td>21/11/2022</td>
                  <td>25/11/2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </div>
  );
};
