import { Context } from "../store/appContext";
import FullCalendar from "@fullcalendar/react";
import React, { Component, useState, useEffect } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { DayGridView } from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {
  DateClickArg,
  Draggable,
} from "@fullcalendar/interaction";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { element } from "prop-types";
var moment = require("moment");
export default function EventCalendar() {
  const [agenda, setAgenda] = useState([]);

  const [medico, setMedico] = useState([]);

  const [cliente, setCliente] = useState([]);

  //--------------------fetch tabla CLIENTES-------------------------
  //---------------------------------------------------------------

  const fetchCliente = async (element) => {
    await fetch(process.env.BACKEND_URL + "/api/clientes/" + element.cliente_id)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.nombre);
        return response.nombre;
      })
      .catch((error) => console.log("Error en la solicitud de clientes"));
  };

  //--------------------fetch tabla AGENDA-------------------------
  //---------------------------------------------------------------
  const fetchAgenda = async () => {
    await fetch(process.env.BACKEND_URL + "/api/agenda")
      .then((response) => response.json())
      .then((response) => {
        let aux = response.Eventos.map((element, index) => {
          return {
            title: fetchCliente(element),
            start:
              moment(element.fecha).format("YYYY-MM-DD") + "T" + element.hora,
          };
        });
        setAgenda(aux);
      })
      .catch((error) => console.log("Error en la solicitud de agenda"));
  };

  console.log(agenda);

  useEffect(() => {
    fetchCliente(), fetchAgenda();
  }, []);

  return (
    <div className="bg-dark">
      <div className="container bg-secondary text-light rounded">
        <FullCalendar
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          locale={"es"}
          timeZone={"America/Buenos_Aires"}
          navLinks={true}
          dayHeaderClassNames={"bg-dark"}
          viewClassNames={"bg-dark"}
          //eventClassNames={"shadow-lg p-2 mb-1 rounded bg-warning"}
          eventColor={"#FF9F29"}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          slotDuration="00:15:00"
          slotLabelInterval={{ hours: 0.5 }}
          //scrollTime="02:00"
          slotMaxTime={"18:00:00"}
          slotMinTime={"09:00:00"}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          //eventTextColor="red"
          events={agenda}
        />
      </div>
    </div>
  );
}
