import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ApplyFormPage = ({ job, onClose }) => {
  const [form, setForm] = useState({ fullName: "", email: "", resume: "" });
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const allSubmissions =
      JSON.parse(localStorage.getItem("submissions")) || [];
    setSubmissions(allSubmissions);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (!user) return;

    const existingIndex = submissions.findIndex(
      (s) => s.jobId === job.id && s.username === user.username
    );

    const newSubmission = { ...form, jobId: job.id, username: user.username };

    if (existingIndex >= 0) {
      submissions[existingIndex] = newSubmission;
      alert("✅ Application updated successfully!");
    } else {
      submissions.push(newSubmission);
      alert("✅ Application submitted successfully!");
    }

    localStorage.setItem("submissions", JSON.stringify(submissions));
    onClose(); 
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg w-full">
        <DialogHeader>
          <DialogTitle>Apply for {job.title}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <Input
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            name="resume"
            placeholder="Resume Link"
            value={form.resume}
            onChange={handleChange}
            required
          />
          <DialogFooter>
            <Button type="submit">
              {submissions.find(
                (s) =>
                  s.jobId === job.id &&
                  s.username ===
                    JSON.parse(sessionStorage.getItem("loggedInUser")).username
              )
                ? "Update"
                : "Submit"}
            </Button>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyFormPage;
