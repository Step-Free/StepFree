import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Jobs from "../pages/Jobs/Jobs";
import Education from "../pages/Education/Education";
import Places from "../pages/Places/Places";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import EmployerDashboard from "../pages/Employer/EmployerDashboard";

import NotFound from "../components/NotFound/NotFound";
import ProtectedRoute from "@/components/ProtectedRoute";

const router = createBrowserRouter([
  // Redirect root → login
  {
    path: "/",
    element: <Navigate to="/auth/sign-in" replace />,
  },

  
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "*", element: <NotFound /> },
    ],
  },

  
  {
    path: "/main",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "education", element: <Education /> },
      { path: "jobs", element: <Jobs /> },
      { path: "places", element: <Places /> },
      { path: "*", element: <NotFound /> },
    ],
  },

  
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },


  {
    path: "/employer/dashboard",
    element: (
      <ProtectedRoute allowedRoles={["employer"]}>
        <EmployerDashboard />
      </ProtectedRoute>
    ),
  },

  
  {
    path: "*",
    element: <Navigate to="/auth/sign-in" replace />,
  },
]);

export default router;
