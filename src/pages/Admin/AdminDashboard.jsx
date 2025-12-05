import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  FileText,
  LogOut,
  Trash2,
  Briefcase,
  Mail,
  Download,
  LayoutDashboard
} from "lucide-react";
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
    <div className="min-h-screen bg-muted/40 p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">Manage users and job applications.</p>
        </div>
        <Button variant="outline" onClick={logout} className="gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
            <p className="text-xs text-muted-foreground">Registered employees & employers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{submissions.length}</div>
            <p className="text-xs text-muted-foreground">Submitted job applications</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-1">

        {/* Users Section */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>Manage registered employees and employers.</CardDescription>
          </CardHeader>
          <CardContent>
            {users.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No users found.
              </div>
            ) : (
              <div className="rounded-md border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted/50 text-muted-foreground font-medium">
                    <tr>
                      <th className="px-4 py-3">Username</th>
                      <th className="px-4 py-3">Role</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {users.map((user, idx) => (
                      <tr key={idx} className="hover:bg-muted/50 transition-colors">
                        <td className="px-4 py-3 font-medium">{user.username}</td>
                        <td className="px-4 py-3">
                          <Badge variant={user.role === 'employer' ? 'default' : 'secondary'}>
                            {user.role}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => handleDeleteUser(idx)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Applications Section */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Applications</CardTitle>
            <CardDescription>Review and manage job submissions.</CardDescription>
          </CardHeader>
          <CardContent>
            {submissions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No applications submitted yet.
              </div>
            ) : (
              <div className="rounded-md border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted/50 text-muted-foreground font-medium">
                    <tr>
                      <th className="px-4 py-3">Job Title</th>
                      <th className="px-4 py-3">Applicant</th>
                      <th className="px-4 py-3">Contact</th>
                      <th className="px-4 py-3">Resume</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {submissions.map((s, idx) => (
                      <tr key={idx} className="hover:bg-muted/50 transition-colors">
                        <td className="px-4 py-3 font-medium">
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                            {getJobTitle(s.jobId)}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-col">
                            <span className="font-medium">{s.fullName}</span>
                            <span className="text-xs text-muted-foreground">@{s.username}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            {s.email}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <a
                            href={s.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            <Download className="h-3 w-3" />
                            View Resume
                          </a>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => handleDeleteSubmission(idx)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default AdminDashboard;
