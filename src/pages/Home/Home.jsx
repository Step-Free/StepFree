import React from "react";
import P1 from "../../assets/1.png";
import P11 from "../../assets/11.png";
import P111 from "../../assets/111.png";
import P1111 from "../../assets/1111.jpg"; // ✅ عدلنا الامتداد
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleCarryBox, faHandshake, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import Css from "./home.module.css"; // ✅ استدعاء الموديول عشان كلاس emp

const Home = () => {
  const features = [
    {
      title: "Empowerment",
      desc: "We believe in fostering independence, self-determination for every individual by accessible resources.",
      icon: <FontAwesomeIcon icon={faHandshake} className="text-blue-400 text-4xl" />,
    },
    {
      title: "Community",
      desc: "Building a supportive network where experiences are shared, and collective strength empowers all members.",
      icon: <FontAwesomeIcon icon={faPeopleCarryBox} className="text-blue-400 text-4xl" />,
    },
    {
      title: "Innovation",
      desc: "Continuously seeking creative solutions and leveraging technology to enhance accessibility and inclusion.",
      icon: <FontAwesomeIcon icon={faLightbulb} className="text-blue-400 text-4xl" />,
    },
  ];

  const services = [
    {
      title: "Education",
      desc: "Discover inclusive learning environments and educational programs for diverse needs, opening doors to knowledge.",
      btn: "Explore Education ",
      img: P1111,
      arr: "→",
    },
    {
      title: "Jobs",
      desc: "Find accessible job opportunities and career support resources designed to help you thrive in the workplace.",
      btn: "Find Job Opportunities ",
      img: P11,
      arr: "→",
    },
    {
      title: "Places",
      desc: "Explore a directory of accessible public venues, recreational facilities, and points of interest for an inclusive experience.",
      btn: "Discover Places ",
      img: P111,
      arr: "→",
    },
  ];

  return (
    <div className="bg-white">
      {/* ✅ Hero Section (Responsive) */}
      <section className="container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-10 first">
        {/* النص */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-700 mb-6 leading-tight max-w-[500px] mx-auto md:mx-0 ${Css.emp} flex flex-col gap-1`}
          >
            <span>Empowering</span>
            <span>Journeys, Connecting Lives.</span>
          </h2>

          <p className="text-gray-600 mb-6 text-base sm:text-lg max-w-[450px] mx-auto md:mx-0">
            StepFree is dedicated to providing accessible resources and information, fostering independence and community
            for disabled individuals worldwide.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold text-[16px] sm:text-[18px] transition w-full sm:w-[230px] h-[40px]">
              Learn More About Us
            </button>

            <button className="border border-gray-300 text-600 px-4 py-2 rounded-lg hover:bg-blue-50 font-semibold text-[16px] sm:text-[18px] transition w-full sm:w-[230px] h-[40px] flex items-center justify-center gap-2">
              Explore Our Services
              <span className="text-600 text-lg">→</span>
            </button>
          </div>
        </div>

        {/* الصورة - تختفي في الموبايل */}
        <div className="w-full md:w-1/2 flex justify-center hidden sm:flex">
          <img src={P1} alt="Inclusive Community" className="w-72 sm:w-96 border rounded-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold text-700 mb-4">Our Commitment to an Inclusive World</h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            At StepFree, our mission is to break down barriers and build bridges to a more accessible and equitable future
            for everyone.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div key={index} className="p-8 rounded-2xl hover:shadow-md transition flex flex-col items-center">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-600 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold text-700 mb-12">Empowering Your Journey Through Our Services</h3>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((card, index) => (
              <div
                key={index}
                className="p-8 bg-white border rounded-2xl hover:shadow-sm transition flex flex-col items-center"
              >
                <img src={card.img} alt={card.title} className="mb-4 w-[235px] h-[190px] rounded" />
                <h4 className="text-xl font-semibold text-600 mb-2">{card.title}</h4>
                <p className="text-gray-600 mb-6">{card.desc}</p>
                <button className="bg-gray-100 text-gray-500 px-5 py-2 rounded-lg transition font-semibold">
                  {card.btn}
                  {card.arr}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
