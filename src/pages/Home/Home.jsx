import React from "react";
import { useNavigate } from "react-router-dom";
import P1 from "../../assets/1.png";
import P11 from "../../assets/11.png";
import P111 from "../../assets/111.png";
import P1111 from "../../assets/1111.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleCarryBox, faHandshake, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Empowerment",
      desc: "We believe in fostering independence, self-determination for every individual by accessible resources.",
      icon: <FontAwesomeIcon icon={faHandshake} className="text-primary text-4xl" />,
    },
    {
      title: "Community",
      desc: "Building a supportive network where experiences are shared, and collective strength empowers all members.",
      icon: <FontAwesomeIcon icon={faPeopleCarryBox} className="text-primary text-4xl" />,
    },
    {
      title: "Innovation",
      desc: "Continuously seeking creative solutions and leveraging technology to enhance accessibility and inclusion.",
      icon: <FontAwesomeIcon icon={faLightbulb} className="text-primary text-4xl" />,
    },
  ];

  const services = [
    {
      title: "Education",
      desc: "Discover inclusive learning environments and educational programs for diverse needs, opening doors to knowledge.",
      btn: "Explore Education",
      img: P1111,
      arr: "→",
      path: "/services/education",
    },
    {
      title: "Jobs",
      desc: "Find accessible job opportunities and career support resources designed to help you thrive in the workplace.",
      btn: "Find Job Opportunities",
      img: P11,
      arr: "→",
      path: "/services/jobs",
    },
    {
      title: "Places",
      desc: "Explore a directory of accessible public venues, recreational facilities, and points of interest for an inclusive experience.",
      btn: "Discover Places",
      img: P111,
      arr: "→",
      path: "/services/places",
    },
  ];

  return (
    <div className="bg-card text-foreground">
    
      <section className="container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-[500px] mx-auto md:mx-0 flex flex-col gap-1 text-primary">
            <span>Empowering</span>
            <span>Journeys, Connecting Lives.</span>
          </h2>

          <p className="text-muted-foreground mb-6 text-base sm:text-lg max-w-[450px] mx-auto md:mx-0">
            StepFree is dedicated to providing accessible resources and information, fostering independence and community
            for disabled individuals worldwide.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Button
              onClick={() => navigate("/about")}
              className="w-full sm:w-[230px] h-[40px] text-sm sm:text-base px-4 py-2"
            >
              Learn More About Us
            </Button>

            <Button
              onClick={() => navigate("/services/places")}
              variant="outline"
              className="w-full sm:w-[230px] h-[40px] text-sm sm:text-base px-4 py-2 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Explore Our Services <span className="text-primary text-lg">→</span>
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center hidden sm:flex">
          <img src={P1} alt="Inclusive Community" className="w-72 sm:w-96 border rounded-lg" />
        </div>
      </section>

    
      <section className="bg-muted py-20">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold text-primary mb-4">Our Commitment to an Inclusive World</h3>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            At StepFree, our mission is to break down barriers and build bridges to a more accessible and equitable future
            for everyone.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl hover:shadow-md transition flex flex-col items-center bg-secondary"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-20">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold text-primary mb-12">Empowering Your Journey Through Our Services</h3>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((card, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl hover:shadow-sm transition flex flex-col items-center bg-secondary"
              >
                <img src={card.img} alt={card.title} className="mb-4 w-[235px] h-[190px] rounded" />
                <h4 className="text-xl font-semibold text-primary mb-2">{card.title}</h4>
                <p className="text-muted-foreground mb-6">{card.desc}</p>
                <Button
                  onClick={() => navigate(card.path)}
                  variant="outline"
                  className="text-sm sm:text-base px-5 py-2"
                >
                  {card.btn} {card.arr}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
