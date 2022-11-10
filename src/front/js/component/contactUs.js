import React from "react";
import { Link } from "react-router-dom";
import "../../img/contactenos.png";

function ContactUs() {
  return (
    <div>
      <div className="d-flex flex-row-reverse justify-content-center">
        <div className="d-flex p-2 mx-5">
          <div className="mt-3 border border-warning border-4 rounded-3 p-5">
            <h3 className="text-success fs-1">¿Necesitas contactarnos?
            </h3>
            <h5 className="py-3 text-success fs-2">Para soporte:</h5>
            <p className="fs-4">
              Podés escribir a <strong>soporte-petsource@gmail.com</strong>
            </p>
             <p className="fs-3"><strong>Horario:</strong>
              </p> 
            <p className="fs-4">Lunes a Viernes de 11:00am UTC a 8:00pm UTC.</p>
            <h5 className="py-3 text-success fs-2">
              Para contratar nuestros servicios:
            </h5>
            <p className="fs-4">
              Podés escribir a
              <strong> contratacion-petsource@gmail.com</strong>
            </p>
            <p className="fs-3">
              <strong>Horario:</strong>
            </p>
            <p className="fs-4">Lunes a Viernes de 11:00am UTC a 8:00pm UTC.</p>
          </div>
        </div>
        <div className="d-flex p-2 ">
          <img
            src="contactenos.png"
            alt="Perro y gato"
            width="500"
            height="500"
            className="align-self-end"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
