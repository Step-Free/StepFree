import React from "react";

const Dashboard = ({ user, setUser }) => {
  if (!user) return <p>Please login first</p>;

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    window.location.href = "/auth/sign-in"; // يرجع للصفحة تسجيل الدخول
  };

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <h3>Role: {user.role}</h3>
      {user.role === "admin" ? (
        <p>This is the Admin dashboard</p>
      ) : (
        <p>This is the User dashboard</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
