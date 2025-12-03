import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import P1 from "../../assets/1.png";
import P11 from "../../assets/11.png";
import P111 from "../../assets/111.png";
import P1111 from "../../assets/1111.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleCarryBox, faHandshake, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const features = [
    {
      title: t("home.commitment.features.empowerment.title"),
      desc: t("home.commitment.features.empowerment.desc"),
      icon: <FontAwesomeIcon icon={faHandshake} className="text-primary text-4xl" />,
    },
    {
      title: t("home.commitment.features.community.title"),
      desc: t("home.commitment.features.community.desc"),
      icon: <FontAwesomeIcon icon={faPeopleCarryBox} className="text-primary text-4xl" />,
    },
    {
      title: t("home.commitment.features.innovation.title"),
      desc: t("home.commitment.features.innovation.desc"),
      icon: <FontAwesomeIcon icon={faLightbulb} className="text-primary text-4xl" />,
    },
  ];

  const services = [
    {
      title: t("home.services.education.title"),
      desc: t("home.services.education.desc"),
      btn: t("home.services.education.btn"),
      img: P1111,
      arr: "→",
      path: "/main/education",
    },
    {
      title: t("home.services.jobs.title"),
      desc: t("home.services.jobs.desc"),
      btn: t("home.services.jobs.btn"),
      img: P11,
      arr: "→",
      path: "/main/jobs",
    },
    {
      title: t("home.services.places.title"),
      desc: t("home.services.places.desc"),
      btn: t("home.services.places.btn"),
      img: P111,
      arr: "→",
      path: "/main/places",
    },
  ];

  return (
    <div className="bg-card text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left rtl:text-right">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-[500px] mx-auto md:mx-0 flex flex-col gap-1 text-primary">
            <span>{t("home.hero.title1")}</span>
            <span>{t("home.hero.title2")}</span>
          </h2>

          <p className="text-muted-foreground mb-6 text-base sm:text-lg max-w-[450px] mx-auto md:mx-0">
            {t("home.hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Button
              onClick={() => navigate("/main/about")}
              className="w-full sm:w-[230px] h-[40px] text-sm sm:text-base px-4 py-2"
            >
              {t("home.hero.learnMore")}
            </Button>

            <Button
              onClick={() => navigate("/main/places")}
              variant="outline"
              className="w-full sm:w-[230px] h-[40px] text-sm sm:text-base px-4 py-2 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {t("home.hero.exploreServices")} <span className="text-primary text-lg rtl:rotate-180">→</span>
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center hidden sm:flex">
          <img src={P1} alt="Inclusive Community" className="w-72 sm:w-96 border rounded-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold text-primary mb-4">{t("home.commitment.title")}</h3>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            {t("home.commitment.description")}
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

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold text-primary mb-12">{t("home.services.title")}</h3>

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
                  {card.btn} <span className="rtl:rotate-180 inline-block ml-1 rtl:ml-0 rtl:mr-1">{card.arr}</span>
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
