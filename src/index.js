import React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

import { App } from "./todo/app";
import "todomvc-app-css/index.css";
import { Worterbuch } from "worterbuch-react";

render(
  <Worterbuch
    config={{
      backendScheme: "ws",
      backendHost: "localhost",
      backendPort: 8080,
      backendPath: "/ws",
    }}
  >
    <HashRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </Worterbuch>,
  document.getElementById("root")
);
