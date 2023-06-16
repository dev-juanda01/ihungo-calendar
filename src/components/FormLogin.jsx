import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserAuth } from "../slices/user/thunks_user";

const initialState = {
  email: "",
  password: "",
};

export default function FormLogin() {
  const [form, setForm] = useState(initialState);
  // const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password)
      return alert("Campos vacios - No ingreso");

    dispatch(getUserAuth(form));

    // console.log(user);

    // if (user != null) {
    //   navigate("calendar");
    //   setForm(initialState);
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Ingreso</h1>
        <div className="mb-3">
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Correo"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
}
