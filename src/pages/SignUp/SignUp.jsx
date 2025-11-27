import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.username || !form.password) {
      alert(t("auth.signUp.alerts.fillAll"));
      return;
    }

    if (form.password.length < 8) {
      alert(t("auth.signUp.alerts.passwordLength"));
      return;
    }

    const users = JSON.parse(sessionStorage.getItem("users")) || [];

    const exists = users.find((u) => u.username === form.username);
    if (exists) {
      alert(t("auth.signUp.alerts.usernameTaken"));
      return;
    }

    users.push(form);
    sessionStorage.setItem("users", JSON.stringify(users));

    alert(t("auth.signUp.alerts.success"));
    navigate("/auth/sign-in");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-2xl font-bold">{t("auth.signUp.title")}</h1>

      <form className="flex flex-col gap-3 w-64" onSubmit={handleSubmit}>

        <input
          type="text"
          name="firstName"
          placeholder={t("auth.signUp.firstNamePlaceholder")}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder={t("auth.signUp.lastNamePlaceholder")}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          name="username"
          placeholder={t("auth.signUp.usernamePlaceholder")}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder={t("auth.signUp.passwordPlaceholder")}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <button className="bg-green-600 text-white p-2 rounded">
          {t("auth.signUp.button")}
        </button>
      </form>

      <p className="text-sm">
        {t("auth.signUp.hasAccount")}{" "}
        <Link to="/auth/sign-in" className="text-blue-600 underline">
          {t("auth.signUp.loginLink")}
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
