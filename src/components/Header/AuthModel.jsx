import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const AuthModal = () => {
  const [activeTab, setActiveTab] = useState("login"); // "login" أو "register"
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ username: "", password: "", role: "user" });
  const [message, setMessage] = useState("");

  // ===== Login Handlers =====
  const handleLoginChange = (e) =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === loginForm.username && u.password === loginForm.password
    );
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setMessage("✅ Login successful!");
      window.location.href = "/dashboard"; // تحويل مباشرة للداشبورد
    } else {
      setMessage("⚠️ Invalid username or password");
    }
  };

  // ===== Register Handlers =====
  const handleRegisterChange = (e) =>
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.username === registerForm.username);
    if (exists) {
      setMessage("⚠️ Username already exists!");
      return;
    }
    users.push(registerForm);
    localStorage.setItem("users", JSON.stringify(users));
    setMessage("✅ Registered successfully! Please login.");
    setRegisterForm({ username: "", password: "", role: "user" });
    setActiveTab("login"); // بعد التسجيل نروح مباشرة للتاب Login
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Sign Up / Login</Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-96 p-6 flex flex-col gap-4">
        <div className="flex justify-center gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "login" ? "bg-primary text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "register" ? "bg-primary text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {message && <p className="text-center text-sm text-red-500">{message}</p>}

        {activeTab === "login" ? (
          <form className="flex flex-col gap-3" onSubmit={handleLoginSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginForm.username}
              onChange={handleLoginChange}
              required
              className="px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-primary"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={handleLoginChange}
              required
              className="px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-primary"
            />
            <Button type="submit">Login</Button>
          </form>
        ) : (
          <form className="flex flex-col gap-3" onSubmit={handleRegisterSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={registerForm.username}
              onChange={handleRegisterChange}
              required
              className="px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-primary"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registerForm.password}
              onChange={handleRegisterChange}
              required
              className="px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-primary"
            />
            <select
              name="role"
              value={registerForm.role}
              onChange={handleRegisterChange}
              className="px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-primary"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <Button type="submit">Register</Button>
          </form>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default AuthModal;
