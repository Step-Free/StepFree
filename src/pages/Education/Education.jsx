import React from "react";
import educationImg from "../../assets/education1.png";
import CardImg from "../../assets/card1.png";
import CardImg2 from "../../assets/card2.png";
import CardImg3 from "../../assets/card3.png";
import CardImg11 from "../../assets/card11.png";
import CardImg12 from "../../assets/card12.png";
import CardImg13 from "../../assets/card13.png";
import CardImg14 from "../../assets/card14.png";
import CardImg15 from "../../assets/card15.png";
import CardImg16 from "../../assets/card16.png";
import Footer1 from "../../components/Footer/Footer";

const Education = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-4 md:px-8 space-y-20">
      {/* ===== القسم الأول ===== */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* ===== النص ===== */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-[40px] font-roboto font-bold text-sky-600 leading-snug mb-8">
            Empowering Minds,
            <br />
            Expanding Horizons
            <br />
            through Education
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-md mx-auto md:mx-0 text-sm sm:text-base text-[18px] font-roboto font-Regular">
            Discover a world of learning opportunities tailored for disabled
            individuals. From online courses to vocational training and inclusive
            university programs, StepFree connects you with the resources to achieve
            your educational goals.
          </p>

          <button className="bg-sky-600 text-white px-6 py-2 text-sm rounded-md font-medium hover:bg-sky-700 transition">
            Back to Services
          </button>
        </div>

        {/* ===== الصورة ===== */}
        <div className="flex-1 flex justify-center">
          <img
            src={educationImg}
            alt="Education illustration"
            className="w-56 sm:w-64 md:w-80 object-contain"
          />
        </div>
      </section>

      {/* ===== الأقسام ===== */}
      {[
        {
          title: "Online Learning Platforms",
          cards: [
            {
              img: CardImg,
              title: "Accessible Online Courses",
              text: "Discover platforms offering inclusive online courses with features like captions, transcripts, and screen-reader compatibility.",
              btn: "Explore Platforms",
            },
            {
              img: CardImg2,
              title: "Virtual Workshops & Webinars",
              text: "Participate in live and recorded workshops designed to be fully accessible for all learners.",
              btn: "Find Workshops",
            },
            {
              img: CardImg3,
              title: "Digital Resource Libraries",
              text: "Access a curated collection of e-books, articles, and educational materials in accessible formats.",
              btn: "Browse Library",
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
            },
            {
              img: CardImg12,
              title: "Career Readiness Training",
              text: "Workshops and mentorship to prepare for interviews, resumes, and workplace adjustments.",
              btn: "Start Training",
            },
            {
              img: CardImg13,
              title: "Certification Courses",
              text: "Gain industry-recognized certifications through accessible training pathways.",
              btn: "Get Certified",
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
            },
            {
              img: CardImg15,
              title: "Disability Support Services",
              text: "Learn about support centers and programs for disabled students on campus.",
              btn: "Learn More",
            },
            {
              img: CardImg16,
              title: "Scholarships & Funding",
              text: "Find scholarships and financial aid for disabled students pursuing higher education.",
              btn: "View Scholarships",
            },
          ],
        },
      ].map((section, i) => (
        <section key={i} className="py-8 w-full">
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
                  <div className="p-4 flex flex-col flex-grow"
                                  style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}
                  >
                    <h3 className="text-black mb-4 text-left text-xl font-bold">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 text-left">
                      {card.text}
                    </p>
                    <button className="bg-sky-600 text-white px-4 py-2 text-sm rounded-md font-medium hover:bg-sky-700 transition mt-auto">
                      {card.btn}
                    </button>
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
