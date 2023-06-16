import { postAuthenticateUser } from "../../hooks/useAxiosHelp";
import { login, startLoadingLogin } from "./userSlice";

const enpoint = "login";

const getUserAuth = (user) => {
  return async (dispatch, getState) => {
    try {
      dispatch(startLoadingLogin());
      const { data } = await postAuthenticateUser(enpoint, user);
      dispatch(login(data));
    } catch (error) {
      const resError = error.response.data.error;
      alert(resError);
    }
  };
};

export { getUserAuth };
