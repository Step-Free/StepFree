import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Briefcase, User, Mail, FileText, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const ApplyFormPage = ({ job, onClose }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ fullName: "", email: "", resume: "" });
  const [submissions, setSubmissions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loggedInUser = sessionStorage.getItem("loggedInUser");
  const user = loggedInUser ? JSON.parse(loggedInUser) : null;

  useEffect(() => {
    const allSubmissions =
      JSON.parse(localStorage.getItem("submissions")) || [];
    setSubmissions(allSubmissions);

    // Load existing application if exists
    const existing = allSubmissions.find(
      (s) => s.jobId === job.id && s.username === user?.username
    );
    if (existing)
      setForm({
        fullName: existing.fullName,
        email: existing.email,
        resume: existing.resume,
      });
  }, [job.id, user?.username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));

    const existingIndex = submissions.findIndex(
      (s) => s.jobId === job.id && s.username === user.username
    );

    const newSubmission = { ...form, jobId: job.id, username: user.username };

    if (existingIndex >= 0) {
      submissions[existingIndex] = newSubmission;
      toast.success(
        t("applyForm.successUpdate") || "Application updated successfully!"
      );
    } else {
      submissions.push(newSubmission);
      toast.success(
        t("applyForm.successSubmit") || "Application submitted successfully!"
      );
    }

    localStorage.setItem("submissions", JSON.stringify(submissions));
    setIsSubmitting(false);
    onClose();
  };

  const hasAlreadyApplied = submissions.find(
    (s) => s.jobId === job.id && s.username === user?.username
  );

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] w-[95vw] p-0 overflow-hidden bg-card border-border/50 shadow-2xl rounded-2xl">
        <div className="bg-primary/5 p-6 border-b border-border/50 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 ring-1 ring-primary/20 text-primary">
            <Briefcase className="w-6 h-6" />
          </div>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold tracking-tight text-center">
              {t("applyForm.title")}{" "}
              <span className="text-primary">{job.title}</span>
            </DialogTitle>
            <DialogDescription className="text-center mt-1">
              Complete the form below to submit your application.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-3">
            <div className="space-y-1">
              <Label
                htmlFor="fullName"
                className="text-xs font-semibold uppercase text-muted-foreground ml-1"
              >
                {t("applyForm.fullName")}
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="e.g. John Doe"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="pl-9 bg-muted/30 focus:bg-background transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label
                htmlFor="email"
                className="text-xs font-semibold uppercase text-muted-foreground ml-1"
              >
                {t("applyForm.email")}
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="pl-9 bg-muted/30 focus:bg-background transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label
                htmlFor="resume"
                className="text-xs font-semibold uppercase text-muted-foreground ml-1"
              >
                {t("applyForm.resume")}
              </Label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="resume"
                  name="resume"
                  placeholder="https://linkedin.com/..."
                  value={form.resume}
                  onChange={handleChange}
                  required
                  className="pl-9 bg-muted/30 focus:bg-background transition-colors"
                />
              </div>
            </div>
          </div>

          <DialogFooter className="mt-6 flex-col sm:flex-row gap-2">
            <DialogClose asChild>
              <Button type="button" variant="ghost" className="sm:flex-1">
                {t("applyForm.cancel")}
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="sm:flex-1 shadow-lg shadow-primary/20"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                t("common.loading")
              ) : hasAlreadyApplied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  {t("applyForm.update")}
                </>
              ) : (
                t("applyForm.submit")
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyFormPage;
