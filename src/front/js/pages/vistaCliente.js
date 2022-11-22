import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { AgendaCliente } from "../component/agendaCliente";
import { Vacunacionydesparasitacion } from "../component/vacunacionydesparasitacion";
import "../../styles/cliente.css"

export const VistaCliente = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" este">
      <div className="text-center ">
        <AgendaCliente />
      </div>
      <div>
        <Vacunacionydesparasitacion />
      </div>
    </div>
  );
};
