import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./my/Employee";
import Budget from "./my/Budget";
import GridLayout from "react-grid-layout";
import Dashboard from "./page";
function App() {
  
  
  return (
    <>
    <Dashboard/>
    </>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Budget" element={<Budget />}>
          <Route path="/Employee" element={<Employee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
