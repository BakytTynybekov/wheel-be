import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/GeneralContext";
import { GeneralFirestoreProvider } from "./context/GeneralFirestore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GeneralFirestoreProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </GeneralFirestoreProvider>
  </React.StrictMode>
);
