import { useDispatch, useSelector } from "react-redux";
import { deleteExistsTask } from "../slices/calendar/thunks_calendar";

export default function ButtonDelete({ idTaskToDel }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClickDeleteTask = (e) => {
    let confirmDeleteTask = confirm("¿Estas seguro de eliminar esta tarea?");

    if (confirmDeleteTask) {
      dispatch(deleteExistsTask(user.token, idTaskToDel));
    }
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
