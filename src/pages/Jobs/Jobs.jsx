import { CareerResources } from "@/components/CareerResources/CareerResources";
import { FeaturedOpportunities } from "@/components/FeaturedOpportunities/FeaturedOppurtunities";
import ImageGrid from "@/components/ImagesGrid/ImageGrid";
import { Button } from "@/components/ui/button";
import React from "react";

const Jobs = () => {
  return (
    <>
      <section
        id="Hero"
        className="flex flex-col md:flex-row gap-8 items-center justify-center min-h-screen my-10"
      >
        {/* Left side */}
        <div className="flex flex-col w-full md:w-1/2 justify-center text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 md:mb-8">
            Unlock Your Career Potential
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
            StepFree connects disabled job seekers with inclusive opportunities
            and tailored support. Find your next role with employers who value
            diversity and accessibility.
          </p>

          <div className="flex justify-center md:justify-start">
            <Button className="w-auto text-sm sm:text-base px-6 py-3">
              Explore Job Listings
            </Button>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img
            src="/src/assets/images/Selection.png"
            alt="Hero section"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </section>
      <div id="Featured" className="p-6 my-16 bg-secondary">
        <FeaturedOpportunities />
      </div>
      <CareerResources />

      <div id="Partner" className="p-6 my-16 bg-secondary">
        <ImageGrid />
      </div>

      <section className="py-12 my-16 flex flex-col justify-center items-center bg-primary-foreground">
        <div className="flex flex-col justify-center items-center  max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Need More Support?
          </h2>
          <p className="text-lg text-muted-foreground  text-center mb-8">
            Our team is here to help you navigate your career journey. Reach out
            for personalized guidance and support.
          </p>
          <Button variant="outline">Contact Our Team</Button>
        </div>
      </section>
    </>
  );
};

export default Jobs;
