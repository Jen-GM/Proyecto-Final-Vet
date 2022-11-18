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

  //--------------------fetch tabla AGENDA-------------------------
  //---------------------------------------------------------------
  const fetchAgenda = async () => {
    await fetch(process.env.BACKEND_URL + "/api/agenda")
      .then((response) => response.json())
      .then((response) => {
        let aux = response.Eventos.map((element, index) => {
          let color = "red";
          if (element.medico_id === 1) {
            color = "green";
          } else if (element.medico_id === 2) {
            color = "blue";
          }
          return {
            title: element.nombre,
            start:
              moment(element.fecha).format("YYYY-MM-DD") + "T" + element.hora,
            backgroundColor: color,
          };
        });
        setAgenda(aux);
      })
      .catch((error) => console.log("Error en la solicitud de agenda"));
  };
  console.log(agenda);

  //----------------------------------------------------------------------
  useEffect(() => {
    fetchAgenda();
  }, []);

  return (
    <div className="bg-dark">
      {agenda && (
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
      )}
    </div>
  );
}
