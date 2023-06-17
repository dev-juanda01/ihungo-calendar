import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import "../styles/Home.css";

export default function Home() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  if (user != null) {
    navigate("calendar");
  }

  return (
    <>
      <div className="home container">
        <div className="row align-items-center justify-content-center text-center">
          <Login />
          <Register />
        </div>
      </div>
    </>
  );
}
