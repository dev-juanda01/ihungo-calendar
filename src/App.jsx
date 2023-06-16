import Calendar from "./pages/Calendar";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calendar/" element={<Calendar />} />
      </Routes>
    </>
  );
}

export default App;
