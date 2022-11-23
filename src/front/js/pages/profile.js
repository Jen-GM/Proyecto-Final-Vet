import React from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "../../styles/profile.css";

export const Profile = () => {

  const handleConfirm = (e) => {
  const Swal = require("sweetalert2");
    e.preventDefault();
    Swal.fire({
      position: "center",
      imageUrl: "happydog.jpg",
      imageWidth: 180,
      imageHeight: 150,
      imageAlt: "cat",
      title: "¡Se han guardado los cambios!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="container mt-2 ">
        <div className="card p-1 text-center">
          <div className="d-flex flex-row justify-content-center mb-1">
            <div className="image shadow-sm">
              {" "}
              <span></span>{" "}
            </div>
          </div>
          <h4 className="text-success">Editar Perfil</h4>
          <div className="row ms-5 p-4">
            <div className="col-md-3">
              <div className="d-flex flex-column">
                <img
                  src="https://i0.wp.com/twoplusdogs.co.uk/wp-content/uploads/2020/12/dog-food.jpg?w=664&ssl=1"
                  className="img-thumbnail shadow-sm p-3 mb-5 bg-body rounded"
                />{" "}
              </div>
            </div>
            <div className="col-md-4 ps-5">
              <div>
                <br />
              </div>
              <div className="form-floating mb-4">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Nombre Completo</label>
              </div>
              <div className="col-md-12">
                <div className="form-floating mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Correo</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Direccion</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Telefono</label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 d-grid gap-2 d-flex justify-content-center">
            {" "}
            <button className="px-3 btn btn-lg btn-outline-success">
              Cancelar
            </button>{" "}
            <button className="px-3 btn btn-lg btn-success" onClick={handleConfirm}>Guardar</button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
