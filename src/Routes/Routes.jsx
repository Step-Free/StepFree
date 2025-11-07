import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Jobs from "../pages/Jobs/Jobs";
import Education from "../pages/Education/Education";
import Places from "../pages/Places/Places";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import NotFound from "../components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    Component: MainLayout,
    path: "/",
    children: [
      {
        index: true,
        path: "home",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "services",
        children: [
          {
            path: "education",
            Component: Education,
          },
          {
            path: "jobs",
            Component: Jobs,
          },
          {
            path: "places",
            Component: Places,
          },
        ],
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: "sign-in",
        Component: SignIn,
      },
      {
        path: "sign-up",
        Component: SignUp,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
