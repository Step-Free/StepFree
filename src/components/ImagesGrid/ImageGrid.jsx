import React from "react";
import { useTranslation } from "react-i18next";

const ImageGrid = () => {
  const { t } = useTranslation();
  const images = [
    "/src/assets/images/partner1.svg",
    "/src/assets/images/partner2.svg",
    "/src/assets/images/partner3.svg",
    "/src/assets/images/partner4.svg",
    "/src/assets/images/partner5.svg",
    "/src/assets/images/partner6.svg",
  ];

  return (
    <section className="py-12 my-10  flex flex-col justify-center align-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-10 text-center">
          {t("jobs.partners.title")}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-24">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Gallery image ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
