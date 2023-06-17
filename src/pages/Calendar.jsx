import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridWeekPlugin from "@fullcalendar/timegrid";
import localesFullCalendar from "@fullcalendar/core/locales/es";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Header from "../components/Header";
import { headerToolbarOptions } from "../helpers/props_fullcalendar";
import ModalCreateTask from "../components/ModalCreateTask";
import ButtonCreate from "../components/ButtonCreate";
import ButtonDelete from "../components/ButtonDelete";
import { getAllTasks } from "../slices/calendar/thunks_calendar";
import Spinnerloader from "../components/Spinnerloader";
import "../styles/Calendar.css";
import { sendMessageToViewAndUpdateTask } from "../helpers/sweetalert_help";
import { getActiveUsersToFormTask } from "../slices/user/thunks_user";

export default function Calendar() {
  const { tasks, isLoading } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataToDel, setDataToDel] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);

  const eventClickTask = (eventInfo) => {
    const task = {
      activity_type: eventInfo.event.title,
      description: eventInfo.event.extendedProps.description,
      start_date: dayjs(eventInfo.event.start).format("YYYY-MM-DD"),
      end_date: dayjs(eventInfo.event.end).format("YYYY-MM-DD"),
      color: eventInfo.event.backgroundColor,
      id: eventInfo.event.id,
      user: eventInfo.event.extendedProps.user,
    };

    sendMessageToViewAndUpdateTask(task).then((res) => {
      if (res) {
        setDataToEdit(task);
      }
    });
    setDataToDel(eventInfo.event.id);
  };

  useEffect(() => {
    if (!user) return navigate("/");

    if (user.user.is_superuser) {
      dispatch(getAllTasks(user.token));
      dispatch(getActiveUsersToFormTask(user.token));
    } else {
      dispatch(getAllTasks(user.token, user.user.id));
    }
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
              <ModalCreateTask
                setTaskToEdit={setDataToEdit}
                taskToEdit={dataToEdit}
              />
              <ButtonCreate />
              <ButtonDelete idTaskToDel={dataToDel} />
            </>
          )}
        </div>
      )}
    </>
  );
}
