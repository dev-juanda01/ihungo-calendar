import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postNewTask,
  updateExistsTask,
} from "../slices/calendar/thunks_calendar";

const formInitialState = {
  id: null,
  activity_type: "",
  description: "",
  start_date: "",
  end_date: "",
  color: "",
  user: 0,
};

export default function FormTask({ setTaskToEdit, taskToEdit }) {
  const [form, setForm] = useState(formInitialState);
  const { user, activeUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.activity_type ||
      !form.end_date ||
      !form.start_date ||
      !form.user ||
      !form.color
    ) {
      return alert("Campos vacios - Completelos");
    }

    form.id
      ? dispatch(updateExistsTask(user.token, form))
      : dispatch(postNewTask(user.token, form));
    setForm(formInitialState);
  };

  useEffect(() => {
    taskToEdit && setForm(taskToEdit);
  }, [taskToEdit]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Tipo de actividad
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Tipo de actividad"
          name="activity_type"
          onChange={handleChange}
          value={form.activity_type}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Descripción
        </label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Descripción (opcional)"
          onChange={handleChange}
          value={form.description}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="fechaInicio" className="form-label">
          Fecha de inicio
        </label>
        <input
          type="date"
          name="start_date"
          id="fechaInicio"
          className="form-control"
          onChange={handleChange}
          value={form.start_date}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fechaFin" className="form-label">
          Fecha de fin
        </label>
        <input
          type="date"
          name="end_date"
          id="fechaFin"
          className="form-control"
          onChange={handleChange}
          value={form.end_date}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="color" className="form-label">
          Color
        </label>
        <br />
        <input
          type="color"
          name="color"
          id="color"
          value={form.color}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="asociado" className="form-label">
          Asociado
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="user"
          onChange={handleChange}
          value={form.user}
        >
          <option value={0} disabled>
            Selecciona un asociado
          </option>
          {activeUsers.map((user, index) => (
            <option key={index} value={user.id}>
              {user.email}
            </option>
          ))}
        </select>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
          onClick={() => {
            setForm(formInitialState);
            setTaskToEdit(null);
          }}
        >
          Cerrar
        </button>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </div>
    </form>
  );
}
