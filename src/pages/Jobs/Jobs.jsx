import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CareerResources } from "@/components/CareerResources/CareerResources";
import ImageGrid from "@/components/ImagesGrid/ImageGrid";
import { useTranslation } from "react-i18next";
import ApplyFormPage from "@/pages/ApplyFormPage";
import { useNavigate } from "react-router-dom";
import { FeaturedOpportunities as Featured } from "@/components/FeaturedOpportunities/FeaturedOpportunities";

const Jobs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);

  const featuredRef = useRef(null);
  const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  const handleApply = (job) => {
    if (!user) {
      navigate("/auth/sign-in");
      return;
    }
    setSelectedJob(job);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <section className="flex flex-col md:flex-row gap-8 items-center justify-center min-h-screen">
          <div className="flex flex-col w-full md:w-1/2 justify-center text-center md:text-left rtl:text-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 md:mb-8">
              {t("jobs.hero.title")}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
              {t("jobs.hero.description")}
            </p>

            <div className="flex justify-center md:justify-start">
              <Button
                onClick={() =>
                  featuredRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("jobs.hero.button")}
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <img
              src="/src/assets/images/Selection.png"
              alt="Hero section"
              className="w-full max-w-full md:max-w-md h-auto object-contain"
            />
          </div>
        </section>
      </div>

      {/* Featured Opportunities */}
      <div className="container mx-auto px-4" ref={featuredRef}>
        <Featured jobs={jobs} onApply={handleApply} />
      </div>

      {/* Career Resources */}
      <div className="container mx-auto px-4 mt-16">
        <CareerResources />
      </div>

      {/* Partner / Images Section */}
      <div id="Partner" className="p-6 my-16 bg-secondary">
        <div className="container mx-auto px-4">
          <ImageGrid />
        </div>
      </div>

      {/* Apply Modal */}
      {selectedJob && (
        <ApplyFormPage job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  );
};

export default Jobs;
