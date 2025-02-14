import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import reportWebVitals from "./reportWebVitals";
import { TodoManagerApp } from "./components/to-do-manager/to-do-manager-app";
import { NavigationBar } from "./components/navigation-bar/navigation-bar";
import { Test } from "./components/test/test";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/to-do-manager" element={<TodoManagerApp />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
