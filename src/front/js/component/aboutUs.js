import React from "react";
import { Link } from "react-router-dom";
import "../../img/sobrenosotros.png";

function AboutUs() {
  return (
    <div className="container-total">
      <div className="d-flex flex-row">
        <div className="d-flex p-2">
          <div>
            <h2 className="text-success">Sobre nosotros</h2>
            <p className="text">
              <strong>Petsource</strong> es una app pensada para facilitar la
              comunicación entre el personal veterinario y los dueños de
              mascotas. Sabemos que nuestras mascotas son parte de la familia y
              queremos tener la información de su salud siempre a mano. Con{" "}
              <strong>Petsource</strong> nos aseguramos de que de una forma
              sencilla el personal veterinario te comunique lo que está pasando
              con tu mascota.
            </p>
          </div>
        </div>
        <div className="d-flex p-2">
          <img
            src="sobrenosotros.png"
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

export default AboutUs;
