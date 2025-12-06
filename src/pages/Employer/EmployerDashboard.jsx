import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  MapPin,
  Building2,
  Plus,
  FileText,
  LogOut,
  Trash2,
  Mail,
  Download,
  LayoutDashboard,
  X
} from "lucide-react";
import { toast } from "sonner";

const EmployerDashboard = () => {
  const navigate = useNavigate();
  const [myJobs, setMyJobs] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [showPostJob, setShowPostJob] = useState(false);
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    employmentType: "",
    description: "",
    image: "",
  });

  const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

  useEffect(() => {
    if (!user || user.role !== "employer") {
      navigate("/auth/sign-in");
      return;
    }

    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const employerJobs = storedJobs.filter(
      (job) => job.postedBy === user.username
    );
    setMyJobs(employerJobs);

    const storedSubmissions =
      JSON.parse(localStorage.getItem("submissions")) || [];
    const employerSubmissions = storedSubmissions.filter((sub) =>
      employerJobs.some((job) => job.id === sub.jobId)
    );
    setSubmissions(employerSubmissions);
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(),
      ...form,
      buttonLabel: "View Details",
      postedBy: user.username,
    };

    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    storedJobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(storedJobs));

    setMyJobs((prev) => [...prev, newJob]);
    setForm({
      title: "",
      company: "",
      location: "",
      employmentType: "",
      description: "",
      image: "",
    });
    setShowPostJob(false);

    toast.success("Job posted successfully!");
  };

  const handleDeleteSubmission = (index) => {
    const updated = [...submissions];
    const subToDelete = updated.splice(index, 1)[0];

    const storedSubmissions =
      JSON.parse(localStorage.getItem("submissions")) || [];
    const updatedAll = storedSubmissions.filter(
      (s) =>
        !(s.jobId === subToDelete.jobId && s.username === subToDelete.username)
    );
    localStorage.setItem("submissions", JSON.stringify(updatedAll));
    setSubmissions(updated);
  };

  const logout = () => {
    sessionStorage.removeItem("loggedInUser");
    navigate("/auth/sign-in");
  };

  const getJobTitle = (jobId) => {
    const job = myJobs.find((j) => j.id === jobId);
    return job ? job.title : "Unknown Job";
  };

  return (
    <div className="min-h-screen bg-muted/40 p-6 md:p-8">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            Employer Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">Manage your job postings and view applications.</p>
        </div>
        <Button variant="outline" onClick={logout} className="gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>


      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{myJobs.length}</div>
            <p className="text-xs text-muted-foreground">Jobs currently posted</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{submissions.length}</div>
            <p className="text-xs text-muted-foreground">Applications received</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-1">


        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold tracking-tight">My Jobs</h2>
            <Button onClick={() => setShowPostJob(!showPostJob)} className="gap-2">
              {showPostJob ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              {showPostJob ? "Cancel" : "Post New Job"}
            </Button>
          </div>

          {showPostJob && (
            <Card className="border-primary/20 shadow-md animate-in fade-in slide-in-from-top-4 duration-300">
              <CardHeader>
                <CardTitle>Post a New Job</CardTitle>
                <CardDescription>Fill in the details to post a new job opportunity.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePostJob} className="grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Job Title</label>
                      <Input
                        name="title"
                        placeholder="e.g. Frontend Developer"
                        value={form.title}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company Name</label>
                      <Input
                        name="company"
                        placeholder="e.g. Tech Corp"
                        value={form.company}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Location</label>
                      <Input
                        name="location"
                        placeholder="e.g. Remote, New York"
                        value={form.location}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Employment Type</label>
                      <Input
                        name="employmentType"
                        placeholder="e.g. Full-time, Contract"
                        value={form.employmentType}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <Textarea
                      name="description"
                      placeholder="Describe the job role and requirements..."
                      value={form.description}
                      onChange={handleChange}
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Image URL (Optional)</label>
                    <Input
                      name="image"
                      placeholder="https://..."
                      value={form.image}
                      onChange={handleChange}
                    />
                  </div>
                  <Button type="submit" className="w-full md:w-auto md:self-start">Post Job</Button>
                </form>
              </CardContent>
            </Card>
          )}

          {myJobs.length === 0 ? (
            <Card className="bg-muted/50 border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                <Briefcase className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">You have not posted any jobs yet.</p>
                <Button variant="link" onClick={() => setShowPostJob(true)} className="mt-2 text-primary">
                  Post your first job
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {myJobs.map((job) => (
                <Card key={job.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-bold line-clamp-1" title={job.title}>{job.title}</CardTitle>
                      <Badge variant="outline" className="shrink-0">{job.employmentType}</Badge>
                    </div>
                    <CardDescription className="flex items-center gap-1">
                      <Building2 className="h-3 w-3" /> {job.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-3 w-3" /> {job.location}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {job.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>


        <Card>
          <CardHeader>
            <CardTitle>Applications</CardTitle>
            <CardDescription>Review applications for your posted jobs.</CardDescription>
          </CardHeader>
          <CardContent>
            {submissions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No applications submitted for your jobs yet.
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
                    {submissions.map((sub, idx) => (
                      <tr key={idx} className="hover:bg-muted/50 transition-colors">
                        <td className="px-4 py-3 font-medium">
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                            {getJobTitle(sub.jobId)}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-col">
                            <span className="font-medium">{sub.fullName}</span>
                            <span className="text-xs text-muted-foreground">@{sub.username}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            {sub.email}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <a
                            href={sub.resume}
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

export default EmployerDashboard;