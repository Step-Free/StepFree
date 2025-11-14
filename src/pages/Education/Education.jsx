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
        { img: CardImg, title: "Accessible Online Courses", text: "Discover platforms offering inclusive online courses with features like captions, transcripts, and screen-reader compatibility.", btn: "Explore Platforms", link: "https://www.w3.org/WAI/courses/foundations-course/" },
        { img: CardImg2, title: "Virtual Workshops & Webinars", text: "Participate in live and recorded workshops designed to be fully accessible for all learners.", btn: "Find Workshops", link: "https://dequeuniversity.com/" },
        { img: CardImg3, title: "Digital Resource Libraries", text: "Access a curated collection of e-books, articles, and educational materials in accessible formats.", btn: "Browse Library", link: "https://www.itu.int/en/ITU-D/Digital-Inclusion/Persons-with-Disabilities/Pages/Self-Paced-Online-Training-on-ICT-Accessibility.aspx" },
      ],
    },
    {
      title: "Vocational Training Programs",
      cards: [
        { img: CardImg11, title: "Skills Development Programs", text: "Enroll in programs focused on practical skills with adaptive learning environments.", btn: "View Programs", link: "https://www.udemy.com" },
        { img: CardImg12, title: "Career Readiness Training", text: "Workshops and mentorship to prepare for interviews, resumes, and workplace adjustments.", btn: "Start Training", link: "https://learn.microsoft.com/en-us/training/paths/accessibility-fundamental/" },
        { img: CardImg13, title: "Certification Courses", text: "Gain industry-recognized certifications through accessible training pathways.", btn: "Get Certified", link: "https://dequeuniversity.com/certification" },
      ],
    },
    {
      title: "Inclusive University Programs",
      cards: [
        { img: CardImg14, title: "University Accessibility Guides", text: "Information on accessibility features, support services, and accommodations at universities.", btn: "Browse Universities", link: "https://web.dev/learn/accessibility" },
        { img: CardImg15, title: "Disability Support Services", text: "Learn about support centers and programs for disabled students on campus.", btn: "Learn More", link: "https://www.scholarships360.org/scholarships/scholarships-for-disabled-students/" },
        { img: CardImg16, title: "Scholarships & Funding", text: "Find scholarships and financial aid for disabled students pursuing higher education.", btn: "View Scholarships", link: "https://www.scholarships.com/financial-aid/college-scholarships/scholarships-by-type/disability-scholarships" },
      ],
    },
  ];

  return (
    <main className="w-full min-h-screen bg-white flex flex-col py-20 px-6 space-y-20">
      <section className="w-full flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-[40px] font-bold text-sky-600 leading-snug mb-8">
            Empowering Minds,
            <br /> Expanding Horizons
            <br /> through Education
          </h1>

          <p className="text-gray-600 leading-relaxed mb-6 text-[18px] max-w-xl">
            Discover a world of learning opportunities tailored for disabled individuals. From online courses to vocational training and inclusive university programs, StepFree connects you with the resources to achieve your goals.
          </p>

          <button className="bg-sky-600 text-white px-6 py-2 rounded-md font-medium hover:bg-sky-700 transition">
            Back to Services
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <img src={educationImg} alt="Education" className="w-72 sm:w-80 md:w-96 object-contain" />
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={i} className={`w-full ${i === 0 || i === sections.length - 1 ? "bg-gray-50 py-20" : "py-12"}`}>
          <div className="w-full text-center">
            <h2 className="text-[40px] font-semibold text-black mb-12">{section.title}</h2>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {section.cards.map((card, index) => (
                <div key={index} className="bg-white rounded-xl shadow hover:shadow-md transition w-72 overflow-hidden flex flex-col">
                  <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
                  <div className="p-4 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-left mb-3">{card.title}</h3>
                    <p className="text-gray-600 text-sm text-left mb-6">{card.text}</p>
                    <a href={card.link} target="_blank" rel="noopener noreferrer" className="bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition mt-auto text-center">
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
