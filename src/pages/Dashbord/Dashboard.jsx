import React from "react";
import { useTranslation } from "react-i18next";

const Dashboard = ({ user, setUser }) => {
  const { t } = useTranslation();

  if (!user) return <p>{t("dashboard.loginFirst")}</p>;

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    window.location.href = "/auth/sign-in"; // يرجع للصفحة تسجيل الدخول
  };

  return (
    <div>
      <h2>{t("dashboard.welcome", { username: user.username })}</h2>
      <h3>{t("dashboard.role", { role: user.role })}</h3>
      {user.role === "admin" ? (
        <p>{t("dashboard.adminMsg")}</p>
      ) : (
        <p>{t("dashboard.userMsg")}</p>
      )}
      <button onClick={handleLogout}>{t("dashboard.logout")}</button>
    </div>
  );
};

export default Dashboard;
