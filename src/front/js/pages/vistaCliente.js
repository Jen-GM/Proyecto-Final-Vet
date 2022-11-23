import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { AgendaCliente } from "../component/agendaCliente";
import { ListaMascotasCliente } from "../component/listaMascotasCliente";
import { Expediente } from "../component/expediente";
import "../../styles/cliente.css";

export const VistaCliente = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h3 className="text-success m-2 p-4">¡Bienvenido, cliente!</h3>
      <div className="m-2 p-3">
        <div className="d-flex justify-content-between">
          <div className="ms-5">
            <h4 className="text-success text-sm-start m-2">Sus mascotas:</h4>
          </div>
          <div className="">
            <AgendaCliente />
          </div>
        </div>
        <div>
          <ListaMascotasCliente />
          <Expediente />
        </div>
      </div>
    </>
  );
};
