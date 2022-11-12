import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AgendaCliente = () => {
  return (
    <div className="h-100">
      <button
        type="button"
        className="btn btn-success position-absolute top-50 end-0 translate-middle-y"
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
                        Bobby
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="message-text" class="col-form-label">
                      Message:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
