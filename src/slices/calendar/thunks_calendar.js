import {
  deleteTask,
  getTasks,
  getTasksToUser,
  postTask,
  putTask,
} from "../../hooks/useAxiosHelp";
import {
  createNewTask,
  deleteOneTask,
  readAllTasks,
  startLoadingTasks,
  updateTask,
} from "./calendarSlice";

const enpoint = "tasks/";

const getAllTasks = (token, user_id = null) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingTasks());

    try {
      let tasks = null;

      if (user_id) {
        tasks = await getTasksToUser(enpoint, token, user_id);
      } else {
        tasks = await getTasks(enpoint, token);
      }

      dispatch(
        readAllTasks({
          tasks: tasks.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

const postNewTask = (token, task) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await postTask(enpoint, token, task);

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

const updateExistsTask = (token, task) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await putTask(enpoint, token, task);
      console.log(data);
      dispatch(updateTask(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteExistsTask = (token, id) => {
  return async (dispatch, getState) => {
    try {
      await deleteTask(enpoint, token, id);
      dispatch(deleteOneTask(id));
    } catch (error) {
      console.log(error);
    }
  };
};

export { getAllTasks, postNewTask, updateExistsTask, deleteExistsTask };
