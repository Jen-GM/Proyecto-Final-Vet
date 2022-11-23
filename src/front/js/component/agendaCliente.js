import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { MapaAgenda } from "./mapaAgenda";
import "../../styles/modalAgenda.css";


export const AgendaCliente = () => {
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
                  <>
                    <div className="form-check">
                      <p className="text">
                        ¿Necesita transporte para su mascota?
                      </p>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
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
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        No
                      </label>
                    </div>
                  </>
                </form>
                <div className="mb-3">
                  <label for="message-text" class="col-form-label">
                    Ingrese la dirección:
                  </label>
                  <div> <MapaAgenda/> </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button type="button" className="btn btn-primary">
                  Solicitar cita
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
