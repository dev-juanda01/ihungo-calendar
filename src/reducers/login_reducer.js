import { TYPES } from "../actions/login_actions";

const loginInitialState = {
  user: null,
};

function loginReducer(state, action) {
  switch (action.type) {
    case TYPES.LOGIN: {
      return {
        user: action.payload,
      };
    }
    case TYPES.LOGOUT: {
      return loginInitialState;
    }
  }
}

export { loginInitialState, loginReducer };
