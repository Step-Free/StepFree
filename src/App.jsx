import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";

import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
