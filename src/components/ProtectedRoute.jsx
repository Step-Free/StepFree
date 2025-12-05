import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(sessionStorage.getItem("loggedInUser")); 
  if (!user) return <Navigate to="/auth/sign-in" replace />;

  if (allowedRoles && !allowedRoles.includes(user.role))
    return <Navigate to="/auth/sign-in" replace />; 

  return children;
};

export default ProtectedRoute;
