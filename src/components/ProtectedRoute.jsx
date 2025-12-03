import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(sessionStorage.getItem("loggedInUser")); // <--- use sessionStorage
  if (!user) return <Navigate to="/auth/sign-in" replace />;

  if (allowedRoles && !allowedRoles.includes(user.role))
    return <Navigate to="/auth/sign-in" replace />; // or /unauthorized

  return children;
};

export default ProtectedRoute;
