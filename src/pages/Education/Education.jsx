import React from "react";
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
  const sections = [
    {
      title: "Online Learning Platforms",
      cards: [
        {
          img: CardImg,
          title: "Accessible Online Courses",
          text: "Discover platforms offering inclusive online courses with features like captions, transcripts, and screen-reader compatibility.",
          btn: "Explore Platforms",
          link: "https://hayat-stg.tawasal.org.sa/ar", // منصة حياة
        },
        {
          img: CardImg2,
          title: "Virtual Workshops & Webinars",
          text: "Participate in live and recorded workshops designed to be fully accessible for all learners.",
          btn: "Find Workshops",
          link: "https://npd-egypt.net/", // National Network for Persons with Disabilities (Ta’heel)
        },
        {
          img: CardImg3,
          title: "Digital Resource Libraries",
          text: "Access a curated collection of e-books, articles, and educational materials in accessible formats.",
          btn: "Browse Library",
          link: "https://www.momkenpwd.org/", // Momken Foundation
        },
      ],
    },

    {
      title: "Vocational Training Programs",
      cards: [
        {
          img: CardImg11,
          title: "Skills Development Programs",
          text: "Enroll in programs focused on practical skills with adaptive learning environments.",
          btn: "View Programs",
          link: "https://itqadem.com", // Itqadem – Skills & adaptive training
        },
        {
          img: CardImg12,
          title: "Career Readiness Training",
          text: "Workshops and mentorship to prepare for interviews, resumes, and workplace adjustments.",
          btn: "Start Training",
          link: "https://hayat-stg.tawasal.org.sa/ar", // Hayat Platform – support & training
        },
        {
          img: CardImg13,
          title: "Certification Courses",
          text: "Gain industry-recognized certifications through accessible training pathways.",
          btn: "Get Certified",
          link: "https://www.momkenpwd.org/", // Momken Foundation – Certification & training programs
        },
      ],
    },
    {
      title: "Inclusive University Programs",
      cards: [
        {
          img: CardImg14,
          title: "University Accessibility Guides",
          text: "Information on accessibility features, support services, and accommodations at universities.",
          btn: "Browse Universities",
          link: "https://npd-egypt.net/", // National Network for Persons with Disabilities – university support
        },
       {
  img: CardImg15,
  title: "Disability Support Services",
  text: "Learn about support centers and programs for disabled students on campus.",
  btn: "Learn More",
  link: "https://hayat-stg.tawasal.org.sa/ar", // Hayat Platform – support services for disabled students
},

        {
          img: CardImg16,
          title: "Scholarships & Funding",
          text: "Find scholarships and financial aid for disabled students pursuing higher education.",
          btn: "View Scholarships",
          link: "https://www.tqeem.sa/", // Tqeem Platform – scholarships & funding
        },
      ],
    },
  ];


  return (
    <main className="min-h-screen py-10 px-4 md:px-8 space-y-10 bg-white text-black dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* ===== Hero Section (SAME AS HOME) ===== */}
      <section className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-10">

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <h1 className="text-4xl sm:text-4xl md:text-4xl font-bold mb-6 leading-[1.1] w-full text-sky-600 text-center md:text-left">
            Empowering Minds, <br />
            Expanding Horizons <br />
            Through Education
          </h1>


          <p className="text-gray-600 dark:text-gray-300 mb-6 text-base sm:text-lg max-w-[450px] mx-auto md:mx-0">
            Discover a world of learning opportunities tailored for disabled
            individuals. From online courses to vocational training and inclusive
            university programs, StepFree connects you with the resources to
            achieve your educational goals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-sky-600 dark:bg-sky-500 text-white px-6 py-2 text-sm rounded-md font-medium hover:bg-sky-700 dark:hover:bg-sky-600 transition">
              Back to Services
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center hidden sm:flex">
          <img
            src={educationImg}
            alt="Education illustration"
            className="w-72 sm:w-96 border rounded-lg object-contain"
          />
        </div>
      </section>

      {/* ===== Dynamic Sections ===== */}
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
                    <h3 className="text-black dark:text-gray-100 mb-4 text-left text-xl font-bold">
                      {card.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 text-left">
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
