import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabPane } from "react-bootstrap";

export const Expediente = () => {
  return (
    <div>
      <div>
        <Tabs
          id="salud-mascota"
          defaultActiveKey="expediente"
          transition={true}
          className="rounded bg-light text-success fs-5 border border-2 border border-dark"
          fill
        >
          <Tab eventKey="expediente" title="Expediente" className="pt-2 bg-light rounded border border-1 border-secondary">
            <div className="mx-3 d-flex justify-content-center">
              <table className="table table-hover m-2 p-1">
                <thead>
                  <tr>
                  <th scope="col">Fecha atención</th>
                    <th scope="col">Motivo consulta</th>
                    <th scope="col">Diágnostico</th>
                    <th scope="col">Estudios médicos</th>
                    <th scope="col">Tratamiento</th>
                    <th scope="col">Recomendaciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15/10/2022</td>
                    <td>Vomito</td>
                    <td>Gastritis</td>
                    <td>N/A</td>
                    <td>Protector gástrico</td>
                    <td>Brindar alimento húmedo en conjunto con el sólido</td>
                  </tr>
                  <tr>
                    <td>15/10/2022</td>
                    <td>Chequeo general</td>
                    <td>Bruno en buen estado</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>Realizar otro chequeo general en un año</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab>
          <Tab eventKey="vacunacion" title="Vacunación" className="bg-light rounded border border-1 border-dark">
            <div className="mx-3 d-flex justify-content-center">
              <table className="table table-hover m-2 p-1">
                <thead>
                  <tr>
                    <th scope="col">Peso</th>
                    <th scope="col">Nombre Vacuna</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Fecha de aplicación</th>
                    <th scope="col">Fecha de siguiente aplicación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>50kg</td>
                    <td>Parvovirosis</td>
                    <td>GOURMET MON PETIT</td>
                    <td>21/11/2022</td>
                    <td>25/11/2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab>
          <Tab eventKey="desparasitacion" title="Desparasitación" className="bg-light rounded border border-1 border-secondary">
          <div className="mx-3 d-flex justify-content-center">
              <table className="table table-hover m-2 p-1">
                <thead>
                  <tr>
                    <th scope="col">Peso</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Fecha de aplicación</th>
                    <th scope="col">Fecha de siguiente aplicación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>50kg</td>
                    <td>GOURMET MON PETIT</td>
                    <td>21/11/2022</td>
                    <td>25/11/2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
