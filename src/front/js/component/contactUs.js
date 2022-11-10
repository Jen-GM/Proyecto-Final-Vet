import React from "react";
import { Link } from "react-router-dom";
import "../../img/contactenos.png";

function ContactUs() {
  return (
    <div>
      <div className="d-flex flex-row">
        <div className="d-flex p-2">
          <img
            src="contactenos.png"
            alt="Perro y gato"
            width="500"
            height="500"
            className="align-self-end"
          />
        </div>
        <div className="d-flex p-2">
          <div>
            <h3 className="text-success text-center">
              ¿Necesitas contactarnos?
            </h3>
            <h5 className="p-3 text-success ">Para soporte:</h5>
            <p>
              Podés escribir a <strong>soporte-petsource@gmail.com</strong>
            </p>
             <p><strong>Horario:</strong>
              </p> 
            <p>Lunes a Viernes de 11:00am UTC a 8:00pm UTC.</p>
            <h5 className="p-3 text-success">
              Para contratar nuestros servicios:
            </h5>
            <p>
              Puedes escribir a
              <strong> contratacion-petsource@gmail.com</strong>
            </p>
            <p>
              <strong>Horario:</strong>
            </p>
            <p>Lunes a Viernes de 11:00am UTC a 8:00pm UTC.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
