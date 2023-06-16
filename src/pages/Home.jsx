import { useSelector } from "react-redux";
import Login from "../components/Login";
import Register from "../components/Register";
// import SpinnerLoader from "../components/Spinnerloader";
import "../styles/Home.css";

export default function Home() {
  // const { user, isLoading } = useSelector((state) => state.user);
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
