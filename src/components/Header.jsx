import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/user/userSlice";

export default function Header() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
        <div className="container-fluid">
          <div className="title-user">
            <i className="fa-solid fa-calendar-days"></i>
            <b>
              {/* {user.name} */}
              <span style={{ paddingLeft: ".6rem", fontWeight: "normal" }}>
                {/* ({user.is_admin ? "Admin" : "Asociado"}) */}
              </span>
            </b>
          </div>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => dispatch(logout())}
          >
            <i
              className="fa-solid fa-arrow-right-from-bracket"
              style={{ paddingRight: ".6rem" }}
            ></i>
            Salir
          </button>
        </div>
      </nav>
    </div>
  );
}
