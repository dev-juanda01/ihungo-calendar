import React from "react";

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
        <div className="container-fluid">
          <h1>Usuario</h1>
          <button type="button" className="btn btn-outline-danger">
            Salir
          </button>
        </div>
      </nav>
    </div>
  );
}
