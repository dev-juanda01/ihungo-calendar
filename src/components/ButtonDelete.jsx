import { useDispatch, useSelector } from "react-redux";
import { deleteExistsTask } from "../slices/calendar/thunks_calendar";

export default function ButtonDelete({ idTaskToDel }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="btn btn-danger btn-option btn-delete"
      onClick={() => dispatch(deleteExistsTask(user.token, idTaskToDel))}
    >
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
}
