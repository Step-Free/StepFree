import React, { useState } from "react";
import Dashboard from "./Dashboard";

const DashboardWrapper = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null
  );

  return <Dashboard user={user} setUser={setUser} />;
};

export default DashboardWrapper;
