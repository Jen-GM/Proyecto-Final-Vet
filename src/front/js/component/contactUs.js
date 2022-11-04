import React from "react";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <div className="container-fluid">
      <div className="text-left m-5">
        <h3 className="text-success">¿Necesitas contactarnos?</h3>
      </div>
      <div className="p-3 bg-gray-700 bg-opacity-10 border border-warning rounded-pill">
        <h5 className="p-3 text-success">Para soporte:</h5>
        <p>Puedes escribir a <strong>soporte-petsource@gmail.com</strong></p>
        <p><strong>Horario:</strong></p>
        <p>Lunes a Viernes de 11:00am UTC a 8:00pm UTC.</p>
        <h5 className="p-3 text-success">Para contratar nuestros servicios:</h5>
        <p>Puedes escribir a<strong> contratacion-petsource@gmail.com</strong></p>
        <p><strong>Horario:</strong></p>
        <p>Lunes a Viernes de 11:00am UTC a 8:00pm UTC.</p>
      </div>
    </div>
  );
}

export default ContactUs;
