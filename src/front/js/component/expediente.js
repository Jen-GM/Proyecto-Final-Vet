import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";

export const Expediente = () => {
  return (
    <div>
      <div>
        <Tabs
          id="salud-mascota"
          defaultActiveKey="expediente"
          transition={true}
          className="mb-3 rounded bg-light text-dark"
          justify
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
      {/* <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Expediente
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Vacunación
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link text-success"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Desparasitación
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            1
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            2
          </div>
          <div
            className="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            3
          </div>
        </div>
      </div> */}
      {/* <div className="card text-center">
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
      </div> */}
    </div>
  );
};
