import React, { useState, Component } from "react";
import { Modal } from "./modal";


export const Usuarios = () => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      {/* //______________ tabla usuarios_____________ */}
 <h3 className="d-flex  mx-5 mt-3">Bienvenido, User</h3>
      <div className="mx-5 d-flex justify-content-center">
        <table className="table table-hover  m-3 p-1">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cliente</th>
              <th scope="col">Correo</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Dirección</th>
              <th scope="col">Mascotas</th>
              <th scope="col">
                {/* --------boton para abrir modal------------ */}
                <button type="button" className="btn btn-primary"
                 data-bs-toggle="modal"
                 data-bs-target="editUser"
                 onClick={handleShow}>
                  {" "}
                  <i className="fas fa-notes-medical">  </i> Nuevo 
                </button>
                <Modal show={show}></Modal>
              </th>
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
              <td>Noé Guzmán</td>
              <td>noe.guz11@gmail.com</td>
              <td>+55 555 5555</td>
              <td>Av. 18, Bolivar, San José, Costa Rica</td>
              <td>Gato Ninja</td>
              <td>
                <i className="fas fa-key"> &nbsp; </i>
                <i className="fas fa-edit"> &nbsp; </i>
                <i className="fas fa-trash">&nbsp; </i>
              </td>
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
              <td>Noé Guzmán</td>
              <td>noe.guz11@gmail.com</td>
              <td>+55 555 5555</td>
              <td>Av. 18, Bolivar, San José, Costa Rica</td>
              <td>Gato Ninja</td>
              <td>
                <i className="fas fa-key"> &nbsp; </i>
                <i className="fas fa-edit"> &nbsp; </i>
                <i className="fas fa-trash">&nbsp; </i>
              </td>
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
              <td>Noé Guzmán</td>
              <td>noe.guz11@gmail.com</td>
              <td>+55 555 5555</td>
              <td>Av. 18, Bolivar, San José, Costa Rica</td>
              <td>Gato Ninja</td>
              <td>
                <i className="fas fa-key"> &nbsp; </i>
                <i className="fas fa-edit"> &nbsp; </i>
                <i className="fas fa-trash">&nbsp; </i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* //______________ fin de tabla_____________ */}

      
</>

    
  );
};
