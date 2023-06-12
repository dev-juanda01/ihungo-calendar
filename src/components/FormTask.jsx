import { useState, useEffect } from "react";
import { getActivesPartner } from "../services/partners_service";

const formInitialState = {
  activity_type: "",
  description: "",
  start_date: "",
  end_date: "",
  partner: "default",
};

export default function FormTask({ createTask }) {
  const [form, setForm] = useState(formInitialState);
  const [activesPartner, setActivesPartner] = useState([]);

  const enpoint = "partners/actives/";

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(form);
  };

  const listActivesPartners = async () => {
    try {
      const { data } = await getActivesPartner(enpoint);
      setActivesPartner(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listActivesPartners();
  }, []);

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
        <label htmlFor="asociado" className="form-label">
          Asociado
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="partner"
          onChange={handleChange}
          value={form.partner}
        >
          <option value="default" disabled>
            Selecciona un asociado
          </option>
          {activesPartner.map((partner, index) => (
            <option key={index} value={partner.id}>
              {partner.name} {partner.last_name}
            </option>
          ))}
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
