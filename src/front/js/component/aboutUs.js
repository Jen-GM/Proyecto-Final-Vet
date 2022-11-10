import React from "react";
import { Link } from "react-router-dom";
import "../../img/sobrenosotros.png";

function AboutUs() {
  return (
    <div className="">
      <div className="d-flex flex-row justify-content-center m-5">
        <div className="d-flex m-1 p-2 w-50">
          <div className="border border-dark border-4 rounded-3 p-5">
            <h3 className="text-success text-center py-3 fs-1">
              Sobre nosotros
            </h3>
            <p className="text text-start fs-4">
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
