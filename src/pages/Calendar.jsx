import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridWeekPlugin from "@fullcalendar/timegrid";
import localesFullCalendar from "@fullcalendar/core/locales/es";
import Header from "../components/Header";
import { headerToolbarOptions } from "../helpers/props_fullcalendar";
import ModalCreateTask from "../components/ModalCreateTask";
import ButtonCreate from "../components/ButtonCreate";
import ButtonDelete from "../components/ButtonDelete";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../slices/calendar/thunks_calendar";
import Spinnerloader from "../components/Spinnerloader";
import "../styles/Calendar.css";
import { useNavigate } from "react-router-dom";

export default function Calendar() {
  const { tasks, isLoading } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataToDel, setDataToDel] = useState(null);

  const eventClickTask = (eventInfo) => {
    setDataToDel(eventInfo.event.id);
  };

  useEffect(() => {
    if (!user) return navigate("/");

    user.user.is_superuser
      ? dispatch(getAllTasks(user.token))
      : dispatch(getAllTasks(user.token, user.user.id));
  }, []);

  return (
    <>
      {isLoading && <Spinnerloader />}
      {user != null && (
        <div className="calendar">
          <Header />
          <FullCalendar
            plugins={[dayGridPlugin, timeGridWeekPlugin]}
            initialView="dayGridMonth"
            headerToolbar={headerToolbarOptions}
            locales={localesFullCalendar}
            locale="es"
            events={tasks}
            eventClick={eventClickTask}
          />
          {user.user.is_superuser && (
            <>
              <ModalCreateTask />
              <ButtonCreate />
              <ButtonDelete idTaskToDel={dataToDel} />
            </>
          )}
        </div>
      )}
    </>
  );
}
