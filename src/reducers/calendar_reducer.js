import { TYPES } from "../actions/calendar_actions";

const calendarInitialState = {
  tasks: null,
};

function calendarReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_ALL_TASKS: {
      return {
        tasks: action.payload.map((task) => ({
          id: task.id,
          title: task.activity_type,
          start: task.start_date,
          end: task.end_date,
          description: task.description,
        })),
      };
    }
    case TYPES.CREATE_TASK: {
      return {
        tasks: [...state.tasks, action.payload],
      };
    }
    case TYPES.UPDATE_TASK: {
    }
    case TYPES.DELETE_TASK: {
    }
  }
}

export { calendarInitialState, calendarReducer };
