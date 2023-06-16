import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "../slices/calendar/calendarSlice";
import { userSlice } from "../slices/user/userSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    calendar: calendarSlice.reducer,
  },
});
