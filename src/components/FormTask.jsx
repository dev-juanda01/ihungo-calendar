import { useState } from "react";
import { useDispatch } from "react-redux";
import { postNewTask } from "../slices/calendar/thunks_calendar";

const formInitialState = {
  activity_type: "",
  description: "",
  start_date: "",
  end_date: "",
  color: "",
  user: "default",
};

export default function FormTask() {
  const [form, setForm] = useState(formInitialState);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.activity_type ||
      !form.description ||
      !form.end_date ||
      !form.start_date ||
      !form.partner
    ) {
      return alert("Campos vacios - Completelos");
    }

    dispatch(postNewTask(form));
  };

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
          name="partner"
          onChange={handleChange}
          value={form.user}
        >
          <option value="default" disabled>
            Selecciona un asociado
          </option>
          <option value={1}>Juan Camilo</option>
          <option value={2}>Adriana Lopex</option>
          <option value={3}>Sara Cardenas</option>
          {/* {activesPartner.map((partner, index) => (
            <option key={index} value={partner.id}>
              {partner.name} {partner.last_name}
            </option>
          ))} */}
        </select>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
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
