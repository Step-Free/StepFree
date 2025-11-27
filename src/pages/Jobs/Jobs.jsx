import { CareerResources } from "@/components/CareerResources/CareerResources";
import { FeaturedOpportunities } from "@/components/FeaturedOpportunities/FeaturedOppurtunities";
import ImageGrid from "@/components/ImagesGrid/ImageGrid";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslation } from "react-i18next";

const Jobs = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto px-4">
        {/* HERO SECTION */}
        <section
          id="Hero"
          className="flex flex-col md:flex-row gap-8 items-center justify-center min-h-screen "
        >
          {/* Left side */}
          <div className="flex flex-col w-full md:w-1/2 justify-center text-center md:text-left rtl:text-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 md:mb-8">
              {t("jobs.hero.title")}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
              {t("jobs.hero.description")}
            </p>

            <div className="flex justify-center md:justify-start">
              <Button className="w-auto text-sm sm:text-base px-6 py-3">
                {t("jobs.hero.button")}
              </Button>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <img
              src="/src/assets/images/Selection.png"
              alt="Hero section"
              className="w-full max-w-full md:max-w-md h-auto object-contain"
            />
          </div>
        </section>
      </div>

      {/* Featured Opportunities SECTION WITH FULL WIDTH BG */}
      <div id="Featured" className="p-6 my-16 bg-secondary">
        <div className="container mx-auto px-4">
          <FeaturedOpportunities />
        </div>
      </div>

      {/* Career Resources */}
      <div className="container mx-auto px-4">
        <CareerResources />
      </div>

      {/* Partners Section */}
      <div id="Partner" className="p-6 my-16 bg-secondary">
        <div className="container mx-auto px-4">
          <ImageGrid />
        </div>
      </div>

      {/* Support Section */}
      <section
        className="py-12 my-16 flex flex-col justify-center items-center 
        bg-primary-foreground text-primary dark:bg-secondary dark:text-primary-foreground"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {t("jobs.support.title")}
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              {t("jobs.support.description")}
            </p>
            <Button variant="outline">{t("jobs.support.button")}</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
