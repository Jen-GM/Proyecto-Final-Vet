import FullCalendar from "@fullcalendar/react";
import React, { Component } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { DayGridView } from "@fullcalendar/daygrid";

export default class EventCalendar extends Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "Feliz día", date: "2022-11-09" },
          { title: "Amputar pata de Firulais", date: "2022-11-10" },
        ]}
      />
    );
  }
}
