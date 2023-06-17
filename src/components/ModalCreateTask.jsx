import FormTask from "./FormTask";

export default function ModalCreateTask({ setTaskToEdit, taskToEdit }) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {taskToEdit ? "Editar tarea" : "Agregar tarea"}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <FormTask setTaskToEdit={setTaskToEdit} taskToEdit={taskToEdit} />
          </div>
        </div>
      </div>
    </div>
  );
}
