import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-datetime/css/react-datetime.css";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import store from "./store/store.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
