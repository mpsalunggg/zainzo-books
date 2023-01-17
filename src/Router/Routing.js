import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from ".././Pages/Login";
import Register from ".././Pages/Register";
import Dashboard from "../Pages/Dashboard";
import DetailEmployee from "../Pages/Employee/DetailEmployee";
import Employee from "../Pages/Employee/Employee";
import Onboarding from "../Pages/Onboarding";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/employee-detail" element={<DetailEmployee />} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
