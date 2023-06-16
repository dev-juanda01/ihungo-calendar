import { deleteTask, getTasks, postTask } from "../../hooks/useAxiosHelp";
import {
  createNewTask,
  deleteOneTask,
  readAllTasks,
  startLoadingTasks,
} from "./calendarSlice";

const enpoint = "tasks/";

const getAllTasks = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingTasks());

    try {
      const { data } = await getTasks(enpoint);

      dispatch(
        readAllTasks({
          tasks: data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

const postNewTask = (task) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await postTask(enpoint, task);

      const dataInCalendarFormat = {
        title: data.activity_type,
        start: data.start_date,
        end: data.end_date,
        description: data.description,
        id: data.id,
        color: data.color,
      };

      dispatch(
        createNewTask({
          task: dataInCalendarFormat,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteExistsTask = (id) => {
  return async (dispatch, getState) => {
    try {
      const res = await deleteTask(enpoint, id);
      dispatch(deleteOneTask(id));
    } catch (error) {
      console.log(error);
    }
  };
};

export { getAllTasks, postNewTask, deleteExistsTask };
