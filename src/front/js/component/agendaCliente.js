import React, { useContext, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { MapaAgenda } from "./mapaAgenda";
import "../../img/happydog.jpg";
import "../../styles/modalAgenda.css";

export const AgendaCliente = () => {
  const Swal = require("sweetalert2");
  const [domicilio, setDomicilio] = useState();
  const [transporte, setTransporte] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      imageUrl: "happydog.jpg",
      imageWidth: 180,
      imageHeight: 150,
      imageAlt: "cat",
      title: "¡Su cita ha sido agendada con éxito!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-success top-50 end-0"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Agendar Cita
      </button>
      <div>
        <div
          className="modal-dialog modal-dialog-scrollable modal fade"
          id="exampleModal"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Agendar Cita
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Cliente:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-5">
                    <div class="form-check">
                      <h6>Mascotas que nos van a visitar:</h6>
                      <input
                        className="form-check-input position-static"
                        id="mascota1"
                        type="checkbox"
                        value="option1"
                        aria-label="Bobby"
                      />
                      <label className="form-check-label" for="mascota1">
                        Bruno Castillo
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="appointment-date" class="col-form-label">
                      Fecha:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="appointment-date"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="appointment-time" class="col-form-label">
                      Hora:
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="appointment-time"
                    />
                  </div>
                  <div className="form-check">
                    <p className="text">¿Desea su cita a domicilio?</p>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value={domicilio}
                      onClick={() => {
                        setDomicilio(true), console.log(domicilio);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Sí
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value={domicilio}
                      onClick={() => {
                        setDomicilio(false), console.log(domicilio);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      No
                    </label>
                  </div>
                  {domicilio == false && (
                    <>
                      <div className="form-check">
                        <p className="text">
                          ¿Necesita transporte para su mascota?
                        </p>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                          onClick={() => {
                            setTransporte(true), console.log(transporte);
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault3"
                        >
                          Sí
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault4"
                          defaultChecked=""
                          onClick={() => {
                            setTransporte(false), console.log(transporte);
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault4"
                        >
                          No
                        </label>
                      </div>
                    </>
                  )}
                </form>
                {(transporte == true && (
                  <div className="mb-3">
                    <label for="message-text" class="col-form-label">
                      Ingrese la dirección:
                    </label>
                    <div>
                      {" "}
                      <MapaAgenda />{" "}
                    </div>
                  </div>
                )) ||
                  (domicilio == true && (
                    <div className="mb-3">
                      <label for="message-text" class="col-form-label">
                        Ingrese la dirección:
                      </label>
                      <div>
                        {" "}
                        <MapaAgenda />{" "}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleSubmit}
                >
                  Solicitar cita
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
