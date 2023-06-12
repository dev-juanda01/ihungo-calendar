import { useReducer, useEffect } from "react";
import Calendar from "./components/Calendar";
import "./App.css";
import Home from "./components/Home";
import { loginInitialState, loginReducer } from "./reducers/login_reducer";
import { postAuth } from "./services/useAxiosHelp";
import { TYPES } from "./actions/login_actions";

function App() {
  const [state, dispatch] = useReducer(loginReducer, loginInitialState);

  const enpoint = "login/";

  const login = async (user) => {
    try {
      const { data } = await postAuth(enpoint, user);
      console.log(data);

      if (data?.is_active == false)
        return alert("Usuario inactivo - requiere permisos del administrador");

      if (data?.is_admin == false)
        return alert(
          "Administrador inactivo - requiere permisos de administrador"
        );

      dispatch({ type: TYPES.LOGIN, payload: data });
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  const logout = () => {
    dispatch({ type: TYPES.LOGOUT });
  };

  useEffect(() => {
    console.log("loader...");
  }, [state]);

  return (
    <>
      {state.user ? (
        <Calendar user={state.user} logout={logout} />
      ) : (
        <Home login={login} />
      )}
    </>
  );
}

export default App;
