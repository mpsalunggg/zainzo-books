import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../Utils/Common";

const AuthRoutes = () => {
  return getToken() ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoutes;
