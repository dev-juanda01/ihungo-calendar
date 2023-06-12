export default function Header({ username, logout, role }) {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
        <div className="container-fluid">
          <div className="title-user">
            <i className="fa-solid fa-calendar-days"></i>
            <b>
              {username}
              <span style={{ paddingLeft: ".6rem", fontWeight: "normal" }}>
                ({role ? "Admin" : "Asociado"})
              </span>
            </b>
          </div>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => logout()}
          >
            Salir
          </button>
        </div>
      </nav>
    </div>
  );
}
