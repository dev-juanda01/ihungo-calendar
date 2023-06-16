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
      }));
      state.isLoading = false;
    },
    createNewTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload.task];
    },
    updateTask: (state, action) => {
      // state.tasks = state.tasks.map(task => )
    },
    deleteOneTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
    },
    startLoadingTasks: (state) => {
      state.isLoading = true;
    },
  },
});

export const { readAllTasks, createNewTask, deleteOneTask, startLoadingTasks } =
  calendarSlice.actions;
