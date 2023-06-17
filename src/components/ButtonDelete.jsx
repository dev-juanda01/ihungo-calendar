import { useDispatch, useSelector } from "react-redux";
import { confirmDeleteTask } from "../helpers/sweetalert_help";
import { deleteExistsTask } from "../slices/calendar/thunks_calendar";

export default function ButtonDelete({ idTaskToDel }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClickDeleteTask = (e) => {
    confirmDeleteTask().then((res) => {
      if (res) {
        dispatch(deleteExistsTask(user.token, idTaskToDel));
        Swal.fire("Eliminada!", "Tarea eliminada correctamente.", "success");
      }
    });
  };

  return (
    <button
      type="button"
      className="btn btn-danger btn-option btn-delete"
      onClick={handleClickDeleteTask}
    >
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
}
