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

export default function Calendar() {
  let { tasks, isLoading } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const [dataToDel, setDataToDel] = useState(null);

  // const removeTask = async () => {
  //   try {
  //     const isDelete = confirm("¿Seguro de eliminar esta tarea?");

  //     if (isDelete) {
  //       const res = await deleteTask(enpoint, dataToDel);
  //       dispatch({ type: TYPES.DELETE_TASK, payload: dataToDel });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const eventClickTask = (eventInfo) => {
    setDataToDel(eventInfo.event.id);
    // alert(`Tarea - ${eventInfo.event.id}`);
  };

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinnerloader />
      ) : (
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
          {/* {user.is_admin && ( */}
          <>
            <ModalCreateTask />
            <ButtonCreate />
            <ButtonDelete dataToDel={dataToDel} />
          </>
          {/* )} */}
        </div>
      )}
    </>
  );
}
