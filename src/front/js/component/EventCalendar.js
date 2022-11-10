import FullCalendar from "@fullcalendar/react";
import React, { Component } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { DayGridView } from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

export default class EventCalendar extends Component {
  // Aqui hacemos el fetch a la tabla agenda y lo guiardamos en un state para ponerlo en los event
  render() {
    return (
      <FullCalendar
        viewClassNames={"bg-dark"}
        //eventClassNames={"bg-primary"}
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridWeek"
        slotDuration="00:00:30"
        slotLabelInterval={{ hours: 1 }}
        scrollTime="05:00"
        slotMaxTime={"18:00:00"}
        slotMinTime={"09:00:00"}
        events={[
          {
            title: "Domar gato Ninja",
            start: "2022-11-09T10:30:00",
            className: "bg-warning p-2",
          },
          {
            title: "Matar gato Ninja",
            start: "2022-11-09T10:40:00",
          },
          { title: "Eutanasia Caballo", date: "2022-11-09" },
        ]}
      />
    );
  }
}
