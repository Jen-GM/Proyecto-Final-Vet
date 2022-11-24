import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "../../img/saved.jpg";

export const AtencionMedica = () => {
  const Swal = require("sweetalert2");
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Le gustaría guardar los cambios?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "green",
      denyButtonColor: "orange",
      confirmButtonText: "Guardar",
      denyButtonText: `Continuar editando...`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("¡Cambios guardados!", "", "success");
      } 
    });
  };

  const handleCancellation = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Esta seguro que desea salir?",
      text: "La información ingresada será borrada",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/mascotas");
      }
    });
  };

  return (
    <>
      <div className="m-4 ps-4">
        <h2 className="text-success text-center m-2 p-4">Atención médica</h2>
        <div className="w-75 h-50 d-flex justify-content-center">
          <nav className="nav-ficha flex-column col-2 me-2">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link text-success active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                FICHA DE ATENCION
              </button>
              <button
                className="nav-link text-success d-block "
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                VACUNA
              </button>
              <button
                className="nav-link text-success"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                DESPARASITACION
              </button>
            </div>
          </nav>
          <div className="tab-content p-3 ps-2 " id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div>
                <div className="row g-2 align-items-center w-90">
                  <div className="col-auto">
                    <label htmlFor="inputText" className="col-form-label">
                      Peso
                    </label>
                  </div>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      id="inputText"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </div>
                  <div className="col-auto mx-2">
                    <label htmlFor="inputText" className="col-form-label">
                      Fecha
                    </label>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-group date" id="datepicker">
                      <span className="input-group-append">
                        <span className="input-group-text bg-light d-block">
                          <i className="fa fa-calendar" />
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="form-floating px-1 ">
                    <textarea
                      className="form-control "
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea">
                      Motivo de la consulta
                    </label>
                  </div>
                  <div className="form-floating px-1 w-90">
                    <textarea
                      className="form-control "
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea">Diagnóstico</label>
                  </div>
                  <div className="form-floating px-1 w-90">
                    <textarea
                      className="form-control "
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea">Exámenes</label>
                  </div>
                  <div className="form-floating py-2 w-90">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea">Tratamiento</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Internamiento
                    </label>
                  </div>
                  <div className="mx-4">
                    <button
                      type="button my-2"
                      className="btn btn-success mx-4"
                      onClick={handleSave}
                    >
                      Guardar
                    </button>
                    <button
                      type="button my-2"
                      className="btn btn-outline-success"
                      onClick={handleCancellation}
                    >
                      Cancelar
                    </button>
                  </div>

                  <div className="col-auto"></div>
                </div>
              </div>
            </div>
            {/* VACUNACION TAB */}
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <form className="row align-items-center w-90">
                <div className="col-md-2">
                  <label htmlFor="inputEmail4" className="form-label">
                    Peso
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    Tipo
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    Marca
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>

                <div className="row-auto">
                  <label htmlFor="inputText" className="col-form-label">
                    Fecha Aplicación
                  </label>
                </div>
                <div className="col-md-1">
                  <div className="input-group date" id="datepicker">
                    <span className="input-group-append">
                      <span className="input-group-text bg-light d-block">
                        <i className="fa fa-calendar" />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="row-auto">
                  <label htmlFor="inputText" className="col-form-label my-1">
                    Siguiente Aplicación
                  </label>
                </div>
                <div className="col-md-1">
                  <div className="input-group date" id="datepicker">
                    <span className="input-group-append">
                      <span className="input-group-text bg-light d-block">
                        <i className="fa fa-calendar" />
                      </span>
                    </span>
                  </div>
                </div>
              </form>
              <div className="mx-3 mt-4">
                <button
                  type="button my-2"
                  className="btn btn-success mx-4"
                  onClick={handleSave}
                >
                  Guardar
                </button>
                <button
                  type="button my-2"
                  className="btn btn-outline-success"
                  onClick={handleCancellation}
                >
                  Cancelar
                </button>
              </div>
            </div>
            {/* /*DESPARASITACION TAB */}
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <form className="row g-2 align-items-center w-90">
                <div className="col-md-2">
                  <label htmlFor="inputEmail4" className="form-label">
                    Peso
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    Marca
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>

                <div className="row-auto">
                  <label htmlFor="inputText" className="col-form-label">
                    Fecha Atención
                  </label>
                </div>
                <div className="col-md-1 ">
                  <div className="input-group date" id="datepicker">
                    <span className="input-group-append">
                      <span className="input-group-text bg-light">
                        <i className="fa fa-calendar" />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="row-auto">
                  <label htmlFor="inputText" className="col-form-label">
                    {" "}
                    Siguiente Atención
                  </label>
                </div>
                <div className="col-md-1">
                  <div className="input-group date" id="datepicker">
                    <span className="input-group-append">
                      <span className="input-group-text bg-light">
                        <i className="fa fa-calendar" />
                      </span>
                    </span>
                  </div>
                </div>
              </form>
              <div className="p-3 mt-2">
                <button
                  type="button my-2"
                  className="btn btn-success mx-4"
                  onClick={handleSave}
                >
                  Guardar
                </button>
                <button
                  type="button my-2"
                  className="btn btn-outline-success"
                  onClick={handleCancellation}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4 ">
            {" "}
            <img src="https://media1.giphy.com/media/W8nu2VD6Hd3DpQLDTy/giphy.gif"></img>
          </div>
        </div>
      </div>
    </>
  );
};
