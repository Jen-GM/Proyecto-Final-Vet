import React from "react";

export const Modal = () => {
  return (
    <>
      {/*Modal Open*/}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Agregar/Editar Usuario:
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            {/* ----modal body------- */}
            <div className="modal-body">
              <form>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row mb-4">
                  <h5>Cliente:</h5>
                  <div className="col mt-1">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form6Example1"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form6Example1">
                        Nombre Completo
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input type="email" id="email" className="form-control" />
                      <label className="form-label" htmlFor="email">
                        Correo Electrónico
                      </label>
                    </div>
                  </div>
                </div>
                {/* Text input */}

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example4"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form6Example4">
                    Dirección
                  </label>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="tel"
                    id="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required=""
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="phone">
                    Número de Teléfono
                  </label>
                </div>
              </form>
              <form>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row mb-4">
                  <h5>Mascota:</h5>
                  <div className="col mt-1">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form6Example1"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form6Example1">
                        Nombre Completo
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input type="email" id="email" className="form-control" />
                      <label className="form-label" htmlFor="email">
                        Fecha de Nacimiento
                      </label>
                    </div>
                  </div>
                </div>
                {/* Text input */}

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example4"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form6Example4">
                    Especie
                  </label>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="text" id="text" className="form-control" />
                  <label className="form-label" htmlFor="text">
                    Padecimiento
                  </label>
                </div>
                <>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      defaultValue="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Hembra
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      defaultValue="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox2"
                    >
                      Macho
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      defaultValue="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Desconocido
                    </label>
                  </div>
                </>
              </form>
            </div>
            <div className="modal-footer">
              {/* ------boton para cerrar modal------- */}

              <button type="button" className="btn btn-primary">
                Agregar otra Mascota
              </button>
              <button type="button" className="btn btn-primary">
                Guardar
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
