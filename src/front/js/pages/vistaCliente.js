import React, { useContext } from "react";
import { AgendaCliente } from "../component/agendaCliente";
import { Context } from "../store/appContext";


export const VistaCliente = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
        <AgendaCliente/>
    </div>
  );
};