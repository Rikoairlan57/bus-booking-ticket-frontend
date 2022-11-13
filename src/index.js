import React from "react";
import "./styles/layout.css";
import "./styles/global.css";
import "./index.css";
import "./styles/auth.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
