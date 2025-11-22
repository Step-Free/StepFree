import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

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
      alert("⚠️ Please fill in all fields!");
      return;
    }

    if (form.password.length < 8) {
      alert("⚠️ Password must be at least 8 characters!");
      return;
    }

    const users = JSON.parse(sessionStorage.getItem("users")) || [];

    const exists = users.find((u) => u.username === form.username);
    if (exists) {
      alert("⚠️ This username is already taken!");
      return;
    }

    users.push(form);
    sessionStorage.setItem("users", JSON.stringify(users));

    alert("✔️ Account created successfully!");
    navigate("/auth/sign-in");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-2xl font-bold">Register</h1>

      <form className="flex flex-col gap-3 w-64" onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

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
          placeholder="Password (min 8 chars)"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <button className="bg-green-600 text-white p-2 rounded">
          Register
        </button>
      </form>

      <p className="text-sm">
        Already have an account?{" "}
        <Link to="/auth/sign-in" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
