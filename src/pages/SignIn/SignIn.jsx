import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert(t("auth.signIn.alerts.fillAll"));
      return;
    }

    const users = JSON.parse(sessionStorage.getItem("users")) || [];

    const user = users.find((u) => u.username === form.username);

    if (!user) {
      alert(t("auth.signIn.alerts.userNotFound"));
      return;
    }

    if (user.password !== form.password) {
      alert(t("auth.signIn.alerts.wrongPassword"));
      return;
    }

    sessionStorage.setItem("loggedInUser", JSON.stringify(user));
    navigate("/main");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-2xl font-bold">{t("auth.signIn.title")}</h1>

      <form className="flex flex-col gap-3 w-64" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder={t("auth.signIn.usernamePlaceholder")}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder={t("auth.signIn.passwordPlaceholder")}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button className="bg-blue-600 text-white p-2 rounded">
          {t("auth.signIn.button")}
        </button>
      </form>

      <p className="text-sm">
        {t("auth.signIn.noAccount")}{" "}
        <Link to="/auth/sign-up" className="text-blue-600 underline">
          {t("auth.signIn.registerLink")}
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
