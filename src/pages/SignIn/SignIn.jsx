import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    const users = JSON.parse(sessionStorage.getItem("users")) || [];
    
    const user = users.find(
      (u) => u.username === form.username && u.password === form.password
    );

    if (!user) {
      alert("⚠️ Wrong username or password!");
      return;
    }

    sessionStorage.setItem("loggedInUser", JSON.stringify(user));

    navigate("/main");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-2xl font-bold">Login</h1>

      <form className="flex flex-col gap-3 w-64" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <button className="bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>

      <p className="text-sm">
        Don't have account?{" "}
        <Link to="/auth/sign-up" className="text-blue-600 underline">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
