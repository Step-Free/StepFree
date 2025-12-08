import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import ApplyFormPage from "@/pages/ApplyFormPage";
import { useNavigate } from "react-router-dom";

export const FeaturedOpportunities = ({ jobs = [] }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);

  const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

  const handleApply = (job) => {
    if (!user) {
      navigate("/auth/sign-in");
      return;
    }
    setSelectedJob(job);
  };

  const handleEdit = (job) => {
    const updatedTitle = prompt("Edit job title:", job.title);
    if (!updatedTitle) return;

    const updatedJobs = jobs.map((j) =>
      j.id === job.id ? { ...j, title: updatedTitle } : j
    );
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    window.location.reload();
  };

  const handleDelete = (jobId) => {
    const updatedJobs = jobs.filter((j) => j.id !== jobId);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    window.location.reload();
  };

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">
        {t("jobs.opportunities.title")}
      </h2>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No jobs available right now.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Card key={job.id} className="flex flex-col">
              <CardHeader className="flex items-center gap-4 py-6">
                {job.image && (
                  <img
                    src={job.image}
                    alt={`${job.company} logo`}
                    className="w-12 h-12 rounded-md object-cover flex-shrink-0"
                  />
                )}
                <div>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{job.company}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow">
                <div className="flex flex-col gap-4 mb-4">
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <MapPin className="w-4 h-4" /> {job.location}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Clock className="w-4 h-4" /> {job.employmentType}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground flex-grow">
                  {job.description}
                </p>
              </CardContent>

              <CardFooter className="pb-6 flex justify-between">
                <Button variant="outline" onClick={() => handleApply(job)}>
                  Apply Now
                </Button>

                {(user?.role === "employer" || user?.role === "admin") && (
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleEdit(job)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(job.id)}
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {selectedJob && (
        <ApplyFormPage job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </section>
  );
};
