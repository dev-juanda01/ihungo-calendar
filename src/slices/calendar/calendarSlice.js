import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  isLoading: false,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    readAllTasks: (state, action) => {
      state.tasks = action.payload.tasks.map((task) => ({
        title: task.activity_type,
        start: task.start_date,
        end: task.end_date,
        description: task.description,
        id: task.id,
        color: task.color,
        user: task.user,
      }));
      state.isLoading = false;
    },
    createNewTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload.task];
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id == action.payload.id
          ? {
              title: action.payload.activity_type,
              start: action.payload.start_date,
              end: action.payload.end_date,
              description: action.payload.description,
              id: action.payload.id,
              color: action.payload.color,
              user: action.payload.user,
            }
          : task
      );
    },
    deleteOneTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
    },
    clearTaskSession: (state) => {
      state.tasks = [];
    },
    startLoadingTasks: (state) => {
      state.isLoading = true;
    },
  },
});

export const {
  readAllTasks,
  createNewTask,
  updateTask,
  deleteOneTask,
  clearTaskSession,
  startLoadingTasks,
} = calendarSlice.actions;
