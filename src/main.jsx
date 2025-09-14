import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AuthContextProvider from "./context/AuthContext";
import { GlobalContextProvider } from "./context/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
