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
          text: "Discover platforms offering inclusive online courses with features like captions, transcripts, and screen‑reader compatibility.",
          btn: "Explore Platforms",
          link: "https://www.w3.org/WAI/courses/foundations-course/" // دورة W3C للوصولية
        },
        {
          img: CardImg2,
          title: "Virtual Workshops & Webinars",
          text: "Participate in live and recorded workshops designed to be fully accessible for all learners.",
          btn: "Find Workshops",
          link: "https://dequeuniversity.com/" // كورسات Deque University للوصولية الرقمية
        },
        {
          img: CardImg3,
          title: "Digital Resource Libraries",
          text: "Access a curated collection of e‑books, articles, and educational materials in accessible formats.",
          btn: "Browse Library",
          link: "https://www.itu.int/en/ITU-D/Digital-Inclusion/Persons-with-Disabilities/Pages/Self-Paced-Online-Training-on-ICT-Accessibility.aspx" // تدريب مجاني من ITU
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
          link: "https://www.udemy.com" // Udemy كورسات عامة (يمكن البحث عن Accessibility)
        },
        {
          img: CardImg12,
          title: "Career Readiness Training",
          text: "Workshops and mentorship to prepare for interviews, resumes, and workplace adjustments.",
          btn: "Start Training",
          link: "https://learn.microsoft.com/en-us/training/paths/accessibility-fundamental/" // مسار تدريبي Microsoft
        },
        {
          img: CardImg13,
          title: "Certification Courses",
          text: "Gain industry‑recognized certifications through accessible training pathways.",
          btn: "Get Certified",
          link: "https://dequeuniversity.com/certification" // شهادات Deque University
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
          link: "https://web.dev/learn/accessibility" // دليل شامل للوصولية في الجامعات
        },
        {
          img: CardImg15,
          title: "Disability Support Services",
          text: "Learn about support centers and programs for disabled students on campus.",
          btn: "Learn More",
          link: "https://www.scholarships360.org/scholarships/scholarships-for-disabled-students/" // قائمة منح للطلاب ذوي الإعاقة
        },
        {
          img: CardImg16,
          title: "Scholarships & Funding",
          text: "Find scholarships and financial aid for disabled students pursuing higher education.",
          btn: "View Scholarships",
          link: "https://www.scholarships.com/financial-aid/college-scholarships/scholarships-by-type/disability-scholarships" // منح مالية للطلاب ذوي الإعاقة
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-4 md:px-8 space-y-20">
      {/* ===== القسم الأول ===== */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-[40px] font-roboto font-bold text-sky-600 leading-snug mb-8">
            Empowering Minds,
            <br />
            Expanding Horizons
            <br />
            through Education
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-md mx-auto md:mx-0 text-sm sm:text-base text-[18px] font-roboto font‑Regular">
            Discover a world of learning opportunities tailored for disabled
            individuals. From online courses to vocational training and inclusive
            university programs, StepFree connects you with the resources to achieve
            your educational goals.
          </p>

          <button className="bg-sky-600 text-white px-6 py-2 text-sm rounded-md font-medium hover:bg-sky-700 transition">
            Back to Services
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={educationImg}
            alt="Education illustration"
            className="w-56 sm:w-64 md:w-80 object-contain"
          />
        </div>
      </section>

      {/* ===== الأقسام ===== */}
      {sections.map((section, i, arr) => (
        <section
          key={i}
          className={`w-full ${i === 0 || i === arr.length - 1 ? "bg-gray-50 py-20" : "py-8"}`}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-10 text-[47px]">
              {section.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {section.cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow hover:shadow-md transition flex flex-col items-center text-center w-64 overflow-hidden"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div
                    className="p-4 flex flex-col flex-grow"
                    style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}
                  >
                    <h3 className="text-black mb-4 text-left text-xl font-bold">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 text-left">
                      {card.text}
                    </p>
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-600 text-white px-4 py-2 text-sm rounded-md font-medium hover:bg-sky-700 transition mt-auto inline-block"
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
