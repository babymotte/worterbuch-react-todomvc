import React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import "todomvc-app-css/index.css";
import "react-tooltip/dist/react-tooltip.css";
import Splash from "./todo/splash";

render(
  <HashRouter>
    <Routes>
      <Route path="*" element={<Splash />} />
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
