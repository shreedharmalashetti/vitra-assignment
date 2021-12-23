import React from "react";
import ReactDOM from "react-dom";
import "virtual:windi.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
