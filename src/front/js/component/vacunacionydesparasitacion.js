import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vacunacionydesparasitacion = () => {
    return(
        <div>
        <h3>Vacunacion</h3>
  
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link" href="#">
                 Vacunacion
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="true" href="#">
                  Desparasitacion
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Expediente
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
        </div>
      
    <div>
    <div>
        <h3>Desparasitacion</h3>
  
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" aria-current="true" href="#">
                  Vacunacion
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link "  href="#">
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
                    <th scope="col">Marca</th>
                    <th scope="col">Fecha de aplicacion</th>
                    <th scope="col">Fecha de siguiente aplicacion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>50kg</td>
                    <td>bravecto</td>
                    <td>21/11/2022</td>
                    <td>25/11/2022</td>
                  </tr>
                  <tr>
                    <td>60kg</td>
                    <td>bravecto</td>
                    <td>21/11/2022</td>
                    <td>25/11/2022</td>
                  </tr>
                  <tr>
                    <td>30kg</td>
                    <td>bravecto</td>
                    <td>21/11/2022</td>
                    <td>25/11/2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      
    </div>
    </div>

    </div>
    )
}