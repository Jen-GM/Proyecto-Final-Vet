import FullCalendar from "@fullcalendar/react";
import React, { Component } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { DayGridView } from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {
  DateClickArg,
  Draggable,
} from "@fullcalendar/interaction";
//import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

const data = [
  {
    title: "Domar gato Ninja",
    start: "2022-11-09T10:30:00",
    //className: "bg-warning p-2",
  },
  {
    title: "Matar gato Ninja",
    start: "2022-11-10T10:40:00",
  },
  { title: "Eutanasia Caballo", start: "2022-11-09T16:30:00" },
];
export default class EventCalendar extends Component {
  // Aqui hacemos el fetch a la tabla agenda y lo guiardamos en un state para ponerlo en los event
  render() {
    return (
      <div className="bg-dark">
        <div className="container bg-secondary text-light rounded">
          <FullCalendar
            header={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            locale={"es"}
            timeZone={"America/Buenos_Aires"}
            navLinks={true}
            //dayHeaderClassNames={"bg-dark"}
            viewClassNames={"bg-dark"}
            eventClassNames={"shadow-lg p-2 mb-1 rounded bg-warning"}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridWeek"
            slotDuration="00:00:30"
            slotLabelInterval={{ hours: 1 }}
            //scrollTime="05:00"
            slotMaxTime={"18:00:00"}
            slotMinTime={"09:00:00"}
            events={data}
          />
        </div>
      </div>
    );
  }
}
