import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/js/bootstrap.bundle.js";

import App from "./App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback="loading...">
      <App />
    </React.Suspense>
  </React.StrictMode>
);
