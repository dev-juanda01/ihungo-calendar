import Login from "./Login";
import Register from "./Register";
import "../styles/Home.css";

export default function Home({ login }) {
  return (
    <div className="home container">
      <div className="row align-items-center justify-content-center text-center">
        <Login login={login} />
        <Register />
      </div>
    </div>
  );
}
