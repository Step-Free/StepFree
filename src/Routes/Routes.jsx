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
import NotFound from "../components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/sign-in" replace />, // أول ما يفتح الموقع → Login
  },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> }, // أول صفحة بعد Login → Home
      { path: "about", element: <About /> },
      { path: "education", element: <Education /> },
      { path: "jobs", element: <Jobs /> },
      { path: "places", element: <Places /> },
      { path: "*", element: <NotFound /> },
    ],
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
    path: "*",
    element: <Navigate to="/auth/sign-in" replace />, // أي route غلط → Login
  },
]);

export default router;
