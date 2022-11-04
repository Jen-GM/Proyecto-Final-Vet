import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="container-fluid">
      <div className="text-left m-5">
        <h3 className="text-success">Sobre nosotros</h3>
      </div>
      <div className="p-3 bg-gray-700 bg-opacity-10 border border-warning rounded-pill">
        <h5 className= "p-3 text-success">¿Qué hacemos?</h5>
        <p><strong>Petsource</strong> es una app pensada para facilitar la comunicación entre el personal veterinario y los dueños de mascotas.</p>
        <p>Sabemos que nuestras mascotas son parte de la familia y queremos tener la información de su salud siempre a mano. Con <strong>Petsource</strong> nos aseguramos de que
        de una forma sencilla el personal veterinario te comunique lo que está pasando con tu mascota.</p>
      </div>
    </div>
  );
}

export default AboutUs;
