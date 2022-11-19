import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { AgendaCliente } from "../component/agendaCliente";

export const VistaCliente = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div>
        <AgendaCliente />
      </div>
    </div>
  );
};
