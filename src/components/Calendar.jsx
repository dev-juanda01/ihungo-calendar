import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridWeek
import Header from "./Header";
import { headerToolbarOptions } from "../helpers/props_fullcalendar";

export default function Calendar() {
  return (
    <div className="calendar">
      <Header />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={headerToolbarOptions}
      />
    </div>
  );
}
