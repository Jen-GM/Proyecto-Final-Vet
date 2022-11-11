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

const data = [
  {
    // title: store.agenda.cliente_id,
    // start: store.agenda.fecha,
  },
  { title: "Matar gato Ninja", start: "2022-11-10T10:40:00" },
  { title: "Eutanasia Caballo", start: "2022-11-11T14:30:00" },
  { title: "Amputar pata de perro", start: "2022-11-11T09:30:00" },
];
export default function EventCalendar() {
  const [agenda, setAgenda] = useState([
    { title: "Matar gato Ninja", start: "2022-11-10T10:40:00" },
    { title: "Eutanasia Caballo", start: "2022-11-11T14:30:00" },
    { title: "Amputar pata de perro", start: "2022-11-11T09:30:00" },
  ]);
  useEffect(() => {
    fetchAgenda();
  }, []);
  //Aqui fetch !!!
  const fetchAgenda = async () => {
    await fetch(process.env.BACKEND_URL + "/api/agenda")
      .then((response) => response.json())
      .then((response) => setAgenda(response))
      .catch((error) => console.log("Error en la solicitud de agenda"));
  };

  console.log(agenda);

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
          eventClassNames={"shadow-lg p-2 mb-1 rounded bg-warning"}
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
          events={agenda}
        />
      </div>
    </div>
  );
}
