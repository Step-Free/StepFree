import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (form.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.username === form.username);

    if (exists) {
      alert("Username already exists");
      return;
    }

    const newUser = {
      id: uuid(),
      firstName: form.firstName,
      lastName: form.lastName,
      username: form.username,
      password: form.password,
      role: form.role,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign up successful! Please sign in.");
    navigate("/auth/sign-in");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <form
        className="bg-secondary p-8 rounded-lg w-full max-w-md shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Sign Up
        </h2>

        <Input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          className="mb-4"
          required
        />
        <Input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          className="mb-4"
          required
        />
        <Input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="mb-4"
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="mb-4"
          required
        />

        <Select
          value={form.role}
          onValueChange={(val) => setForm((prev) => ({ ...prev, role: val }))}
        >
          <SelectTrigger className="mb-4 w-full">
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="employee">Employee</SelectItem>
            <SelectItem value="employer">Employer</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
          </SelectContent>
        </Select>

        <Button type="submit" className="w-full mt-4">
          Sign Up
        </Button>

        <p className="mt-4 text-sm text-muted-foreground text-center">
          Already have an account?{" "}
          <span
            className="text-primary cursor-pointer underline"
            onClick={() => navigate("/auth/sign-in")}
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
