export default function FormRegister() {
  return (
    <>
      <form>
        <h1>Registro</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Correo"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Contraseña"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password-2"
            placeholder="Repita la contraseña"
            required
          />
        </div>
        <button type="submit" className="btn btn-light">
          Crear cuenta
        </button>
      </form>
    </>
  );
}
