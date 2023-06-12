import FormLogin from "./FormLogin";

export default function Login({ login }) {
  return (
    <div className="login col">
      <div className="card card-login">
        <div className="card-body">
          <FormLogin login={login} />
        </div>
      </div>
    </div>
  );
}
