// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button"; // لو عندك زرار جاهز

// const SignIn = ({ onClose }) => {
//   const [form, setForm] = useState({ username: "", password: "" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find(
//       (u) => u.username === form.username && u.password === form.password
//     );

//     if (user) {
//       localStorage.setItem("loggedInUser", JSON.stringify(user));
//       setMessage("✅ Login successful!");

//       // Close modal if passed
//       if (onClose) onClose();

//       // Redirect to dashboard
//       navigate("/dashboard");
//     } else {
//       setMessage("⚠️ Invalid username or password");
//     }
//   };

//   return (
//     <div className="p-6 flex flex-col gap-4 w-full max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
//       <h2 className="text-xl font-bold text-center">Login</h2>

//       <form onSubmit={handleLogin} className="flex flex-col gap-3">
//         <input
//           type="text"
//           placeholder="Username"
//           name="username"
//           value={form.username}
//           onChange={handleChange}
//           required
//           className="px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-primary"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           className="px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-primary"
//         />

//         <Button type="submit" className="w-full mt-2">
//           Login
//         </Button>
//       </form>

//       {message && <p className="text-center text-sm text-red-500">{message}</p>}
//     </div>
//   );
// };

// export default SignIn;
