// import React, { useState } from "react";
// import { Button } from "@/components/ui/button"; // لو عندك component جاهز للزرار

// const SignUp = ({ onClose }) => {
//   const [form, setForm] = useState({ username: "", password: "", role: "user" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();

//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const exists = users.find((u) => u.username === form.username);

//     if (exists) {
//       setMessage("⚠️ Username already exists!");
//       return;
//     }

//     users.push(form);
//     localStorage.setItem("users", JSON.stringify(users));
//     setMessage("✅ Registered successfully!");
//     setForm({ username: "", password: "", role: "user" });

//     // إذا كنت عايز المودال يقفل تلقائي بعد التسجيل
//     if (onClose) onClose();
//   };

//   return (
//     <div className="p-6 flex flex-col gap-4 w-full max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
//       <h2 className="text-xl font-bold text-center">Register</h2>

//       <form onSubmit={handleRegister} className="flex flex-col gap-3">
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

//         <select
//           name="role"
//           value={form.role}
//           onChange={handleChange}
//           className="px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-primary"
//         >
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>

//         <Button type="submit" className="w-full mt-2">
//           Register
//         </Button>
//       </form>

//       {message && <p className="text-center text-sm text-red-500">{message}</p>}
//     </div>
//   );
// };

// export default SignUp;
