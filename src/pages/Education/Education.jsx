import React from "react";
import { useTranslation } from "react-i18next";
import educationImg from "../../assets/images/edu1.png";
import CardImg from "../../assets/images/edu2.png";
import CardImg2 from "../../assets/images/edu3.png";
import CardImg3 from "../../assets/images/edu4.png";
import CardImg11 from "../../assets/images/edu5.png";
import CardImg12 from "../../assets/images/edu6.png";
import CardImg13 from "../../assets/images/edu7.png";
import CardImg14 from "../../assets/images/edu8.png";
import CardImg15 from "../../assets/images/edu9.png";
import CardImg16 from "../../assets/images/edu10.png";

const Education = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t("education.sections.onlineLearning.title"),
      cards: [
        {
          img: CardImg,
          title: t("education.sections.onlineLearning.cards.courses.title"),
          text: t("education.sections.onlineLearning.cards.courses.text"),
          btn: t("education.sections.onlineLearning.cards.courses.btn"),
          link: "https://hayat-stg.tawasal.org.sa/ar", 
        },
        {
          img: CardImg2,
          title: t("education.sections.onlineLearning.cards.workshops.title"),
          text: t("education.sections.onlineLearning.cards.workshops.text"),
          btn: t("education.sections.onlineLearning.cards.workshops.btn"),
          link: "https://npd-egypt.net/", 
        },
        {
          img: CardImg3,
          title: t("education.sections.onlineLearning.cards.library.title"),
          text: t("education.sections.onlineLearning.cards.library.text"),
          btn: t("education.sections.onlineLearning.cards.library.btn"),
          link: "https://www.momkenpwd.org/", 
        },
      ],
    },

    {
      title: t("education.sections.vocationalTraining.title"),
      cards: [
        {
          img: CardImg11,
          title: t("education.sections.vocationalTraining.cards.skills.title"),
          text: t("education.sections.vocationalTraining.cards.skills.text"),
          btn: t("education.sections.vocationalTraining.cards.skills.btn"),
          link: "https://itqadem.com", 
        },
        {
          img: CardImg12,
          title: t("education.sections.vocationalTraining.cards.career.title"),
          text: t("education.sections.vocationalTraining.cards.career.text"),
          btn: t("education.sections.vocationalTraining.cards.career.btn"),
          link: "https://hayat-stg.tawasal.org.sa/ar", 
        },
        {
          img: CardImg13,
          title: t("education.sections.vocationalTraining.cards.certification.title"),
          text: t("education.sections.vocationalTraining.cards.certification.text"),
          btn: t("education.sections.vocationalTraining.cards.certification.btn"),
          link: "https://www.momkenpwd.org/", 
        },
      ],
    },
    {
      title: t("education.sections.universityPrograms.title"),
      cards: [
        {
          img: CardImg14,
          title: t("education.sections.universityPrograms.cards.guides.title"),
          text: t("education.sections.universityPrograms.cards.guides.text"),
          btn: t("education.sections.universityPrograms.cards.guides.btn"),
          link: "https://npd-egypt.net/", 
        },
        {
          img: CardImg15,
          title: t("education.sections.universityPrograms.cards.support.title"),
          text: t("education.sections.universityPrograms.cards.support.text"),
          btn: t("education.sections.universityPrograms.cards.support.btn"),
          link: "https://hayat-stg.tawasal.org.sa/ar", 
        },

        {
          img: CardImg16,
          title: t("education.sections.universityPrograms.cards.scholarships.title"),
          text: t("education.sections.universityPrograms.cards.scholarships.text"),
          btn: t("education.sections.universityPrograms.cards.scholarships.btn"),
          link: "https://www.tqeem.sa/", 
        },
      ],
    },
  ];


  return (
    <main className="min-h-screen py-10 px-4 md:px-8 space-y-10 bg-white text-black dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">

      <section className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-10">

        <div className="w-full md:w-1/2 text-center md:text-left rtl:text-right">

          <h1 className="text-4xl sm:text-4xl md:text-4xl font-bold mb-6 leading-[1.1] w-full text-sky-600 text-center md:text-left rtl:text-right">
            {t("education.hero.title")}
          </h1>


          <p className="text-gray-600 dark:text-gray-300 mb-6 text-base sm:text-lg max-w-[450px] mx-auto md:mx-0">
            {t("education.hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-sky-600 dark:bg-sky-500 text-white px-6 py-2 text-sm rounded-md font-medium hover:bg-sky-700 dark:hover:bg-sky-600 transition">
              {t("education.hero.backBtn")}
            </button>
          </div>
        </div>

      
        <div className="w-full md:w-1/2 flex justify-center hidden sm:flex">
          <img
            src={educationImg}
            alt="Education illustration"
            className="w-72 sm:w-96 border rounded-lg object-contain"
          />
        </div>
      </section>

    
      {sections.map((section, i, arr) => (
        <section
          key={i}
          className={`w-full ${i === 0 || i === arr.length - 1
            ? "bg-gray-50 dark:bg-gray-800 py-12"
            : "py-4"
            } transition-colors duration-300`}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-[40px] sm:text-3xl font-semibold mb-8 text-black dark:text-gray-100">
              {section.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
              {section.cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-md transition flex flex-col items-center text-center w-64 overflow-hidden"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-black dark:text-gray-100 mb-4 text-left rtl:text-right text-xl font-bold">
                      {card.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 text-left rtl:text-right">
                      {card.text}
                    </p>

                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-600 dark:bg-sky-500 text-white px-4 py-2 text-sm rounded-md font-medium hover:bg-sky-700 dark:hover:bg-sky-600 transition mt-auto inline-block"
                    >
                      {card.btn}
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      ))}

    </main>
  );
};

export default Education;
