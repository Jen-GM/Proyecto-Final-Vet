import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Expediente = () => {
  return (
    <div>
      <h1>Ver Expediente</h1>

      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Atencion
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="#">
                Desparasitacion
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Vacunacion
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="mx-5 d-flex justify-content-center">
            <table className="table table-hover  m-3 p-1">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Motivo Consulta</th>
                  <th scope="col">Diagnostico</th>
                  <th scope="col">Tratamiento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkboxNoLabel"
                        defaultValue=""
                        aria-label="..."
                      />
                    </div>
                  </th>
                  <td>14/11/2022</td>
                  <td>Dolor en la pata derecha</td>
                  <td>astilla clavada en la pata derecha</td>
                  <td>Removimos la astilla de la pata derecha</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkboxNoLabel"
                        defaultValue=""
                        aria-label="..."
                      />
                    </div>
                  </th>
                  <td>14/11/2022</td>
                  <td>Dolor en la pata derecha</td>
                  <td>astilla clavada en la pata derecha</td>
                  <td>Removimos la astilla de la pata derecha</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkboxNoLabel"
                        defaultValue=""
                        aria-label="..."
                      />
                    </div>
                  </th>
                  <td>14/11/2022</td>
                  <td>Dolor en la pata derecha</td>
                  <td>astilla clavada en la pata derecha</td>
                  <td>Removimos la astilla de la pata derecha</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
