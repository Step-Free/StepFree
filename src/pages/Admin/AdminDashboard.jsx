import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import opportunities from "@/data/featuredOpportunities.json";

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const allSubmissions =
      JSON.parse(localStorage.getItem("submissions")) || [];
    setSubmissions(allSubmissions);

    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    // Filter only employee and employer
    const filteredUsers = allUsers.filter(
      (u) => u.role === "employee" || u.role === "employer"
    );
    setUsers(filteredUsers);
  }, []);

  const handleDeleteSubmission = (index) => {
    const updated = [...submissions];
    updated.splice(index, 1);
    localStorage.setItem("submissions", JSON.stringify(updated));
    setSubmissions(updated);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    const userToDelete = updatedUsers.splice(index, 1)[0];
    localStorage.setItem(
      "users",
      JSON.stringify(
        JSON.parse(localStorage.getItem("users")).filter(
          (u) => u.username !== userToDelete.username
        )
      )
    );

    // Also delete user's submissions
    const updatedSubmissions = submissions.filter(
      (s) => s.username !== userToDelete.username
    );
    localStorage.setItem("submissions", JSON.stringify(updatedSubmissions));
    setUsers(updatedUsers);
    setSubmissions(updatedSubmissions);
  };

  const logout = () => {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "/auth/sign-in";
  };

  const getJobTitle = (jobId) => {
    const job = opportunities.find((o) => o.id === jobId);
    return job ? job.title : "General Job";
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Admin Dashboard
        </h1>
        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Users (Employee & Employer)
        </h2>
        {users.length === 0 ? (
          <p className="text-gray-700 dark:text-gray-300">
            No employees or employers registered yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <tr>
                  <th className="border px-4 py-2">Username</th>
                  <th className="border px-4 py-2">Role</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="text-center text-gray-800 dark:text-gray-200">
                {users.map((user, idx) => (
                  <tr key={idx}>
                    <td className="border px-4 py-2">{user.username}</td>
                    <td className="border px-4 py-2">{user.role}</td>
                    <td className="border px-4 py-2">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteUser(idx)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Submitted Applications
        </h2>
        {submissions.length === 0 ? (
          <p className="text-gray-700 dark:text-gray-300">
            No applications submitted yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <tr>
                  <th className="border px-4 py-2">Job</th>
                  <th className="border px-4 py-2">Applicant</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Resume</th>
                  <th className="border px-4 py-2">Username</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="text-center text-gray-800 dark:text-gray-200">
                {submissions.map((s, idx) => (
                  <tr key={idx}>
                    <td className="border px-4 py-2">{getJobTitle(s.jobId)}</td>
                    <td className="border px-4 py-2">{s.fullName}</td>
                    <td className="border px-4 py-2">{s.email}</td>
                    <td className="border px-4 py-2">
                      <a
                        href={s.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View
                      </a>
                    </td>
                    <td className="border px-4 py-2">{s.username}</td>
                    <td className="border px-4 py-2">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteSubmission(idx)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;
