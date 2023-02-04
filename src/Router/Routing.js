import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from ".././Pages/Login";
import Register from ".././Pages/Register";
import Dashboard from "../Pages/Dashboard";
import AddEmployee from "../Pages/Employee/AddEmployee";
import DetailEmployee from "../Pages/Employee/DetailEmployee";
import Employee from "../Pages/Employee/Employee";
import Onboarding from "../Pages/Onboarding";
import NonAuthRoute from "./NonAuthRoute";
import AuthRoutes from "./AuthRoutes";
// import Navbar from "../Components/Navbar";

function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route element={<NonAuthRoute />}>
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<AuthRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/employee-detail/:id" element={<DetailEmployee />} />
        <Route exact path="/add-employee" element={<AddEmployee />} />
      </Route>
    </Routes>
  );
}
export default Routing;
