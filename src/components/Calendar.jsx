import { useReducer, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridWeekPlugin from "@fullcalendar/timegrid";
import localesFullCalendar from "@fullcalendar/core/locales/es";
import Header from "./Header";
import {
  eventClickTask,
  headerToolbarOptions,
} from "../helpers/props_fullcalendar";
import ModalCreateTask from "./ModalCreateTask";
import ButtonCreate from "./ButtonCreate";
import ButtonDelete from "./ButtonDelete";
import "../styles/Calendar.css";
import {
  calendarInitialState,
  calendarReducer,
} from "../reducers/calendar_reducer";
import { getTasks, postTask } from "../services/tasks_service";
import { TYPES } from "../actions/calendar_actions";

export default function Calendar({ user, logout }) {
  const [state, dispatch] = useReducer(calendarReducer, calendarInitialState);
  const [role, setRole] = useState(true); // Permite indicar el tipo de usuario que accede (true es admin)

  const enpoint = "tasks/";

  const listTasksToUser = async () => {
    try {
      const res = await getTasks(enpoint);
      let userTasks = res.data;

      if (Object.keys(user).includes("is_active")) {
        setRole(false);
        userTasks = userTasks.filter((task) => task.partner == user.id);
      }

      dispatch({ type: TYPES.READ_ALL_TASKS, payload: userTasks });
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      const { data } = await postTask(enpoint, task);

      const dataInCalendarFormat = {
        title: data.activity_type,
        start: data.start_date,
        end: data.end_date,
        description: data.description,
      };

      dispatch({ type: TYPES.CREATE_TASK, payload: dataInCalendarFormat });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listTasksToUser();
  }, [enpoint]);

  return (
    <div className="calendar">
      <Header username={user && user.name} logout={logout} role={role} />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridWeekPlugin]}
        initialView="dayGridMonth"
        headerToolbar={headerToolbarOptions}
        locales={localesFullCalendar}
        locale="es"
        events={state.tasks}
        eventClick={eventClickTask}
      />
      {role && (
        <>
          <ModalCreateTask createTask={createTask} />
          <ButtonCreate />
          <ButtonDelete />
        </>
      )}
    </div>
  );
}
