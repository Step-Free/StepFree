import React, { useState } from "react"; 
import { useNavigate, Link } from "react-router-dom"; 
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input"; 

const SignIn = () => { 
  const navigate = useNavigate(); 
  const [form, setForm] = useState({ username: "", password: "" }); 

  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setForm((prev) => ({ ...prev, [name]: value.trim() })); 
  }; 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    const users = JSON.parse(localStorage.getItem("users")) || []; 
    const user = users.find(
      (u) => u.username === form.username && u.password === form.password
    ); 
    if (!user) { 
      alert("⚠️ Username not found or wrong password. Please sign up first!"); 
      return; 
    } 
    sessionStorage.setItem("loggedInUser", JSON.stringify(user)); 

    // Redirect بعد تسجيل الدخول → Home
    if (user.role === "admin") navigate("/admin/dashboard"); 
    else if (user.role === "employer") navigate("/employer/dashboard"); 
    else navigate("/main"); 
  }; 

  return ( 
    <div className="flex justify-center items-center min-h-screen bg-background"> 
      <div className="w-full max-w-md p-8 bg-secondary rounded-xl shadow-md"> 
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">Sign In</h2> 
        <form onSubmit={handleSubmit} className="flex flex-col gap-4"> 
          <Input name="username" placeholder="Username" value={form.username} onChange={handleChange} required /> 
          <Input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required /> 
          <Button type="submit" className="w-full mt-2">Sign In</Button> 
        </form> 
        <p className="mt-4 text-sm text-muted-foreground text-center">
          Don't have an account?{" "} 
          <Link to="/auth/sign-up" className="text-primary underline hover:text-primary/80">Register Now</Link> 
        </p> 
      </div> 
    </div> 
  ); 
}; 

export default SignIn;
