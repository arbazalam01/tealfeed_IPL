import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MainContext from "./context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </React.StrictMode>
);
