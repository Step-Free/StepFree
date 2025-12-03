import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

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
    alert("Job posted successfully!");
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
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Employer Dashboard</h1>
        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </div>

      {/* My Jobs */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">My Jobs</h2>
          <Button onClick={() => setShowPostJob(!showPostJob)}>
            {showPostJob ? "Cancel" : "Post New Job"}
          </Button>
        </div>

        {showPostJob && (
          <form
            onSubmit={handlePostJob}
            className="flex flex-col gap-4 mb-6 border p-4 rounded bg-gray-50"
          >
            <Input
              name="title"
              placeholder="Job Title"
              value={form.title}
              onChange={handleChange}
              required
            />
            <Input
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              required
            />
            <Input
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              required
            />
            <Input
              name="employmentType"
              placeholder="Full-time / Part-time / Contract"
              value={form.employmentType}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Job Description"
              value={form.description}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <Input
              name="image"
              placeholder="Image URL (optional)"
              value={form.image}
              onChange={handleChange}
            />
            <Button type="submit">Post Job</Button>
          </form>
        )}

        {myJobs.length === 0 ? (
          <p>You have not posted any jobs yet.</p>
        ) : (
          <ul className="list-disc ml-6">
            {myJobs.map((job) => (
              <li key={job.id}>{job.title}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Applications */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Applications</h2>
        {submissions.length === 0 ? (
          <p>No applications submitted for your jobs yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Job</th>
                  <th className="border px-4 py-2">Applicant</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Resume</th>
                  <th className="border px-4 py-2">Username</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {submissions.map((sub, idx) => (
                  <tr key={idx}>
                    <td className="border px-4 py-2">
                      {getJobTitle(sub.jobId)}
                    </td>
                    <td className="border px-4 py-2">{sub.fullName}</td>
                    <td className="border px-4 py-2">{sub.email}</td>
                    <td className="border px-4 py-2">
                      <a
                        href={sub.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View
                      </a>
                    </td>
                    <td className="border px-4 py-2">{sub.username}</td>
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

export default EmployerDashboard;