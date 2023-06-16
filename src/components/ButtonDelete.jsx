import { useDispatch } from "react-redux";
import { deleteExistsTask } from "../slices/calendar/thunks_calendar";

export default function ButtonDelete({ dataToDel }) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="btn btn-danger btn-option btn-delete"
      onClick={() => dispatch(deleteExistsTask(dataToDel))}
    >
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
}
