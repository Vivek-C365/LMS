import React from "react";
import Earth from "../assets/icons/svg/Earth.svg";
import ConnectPeople from "../assets/icons/svg/connectPeople.jsx";
import HeroPic from "../assets/images/svg/Hero.svg";
import Button from "../components/common/button";
import Animation from "../assets/images/png/Animation.png";
import Design from "../assets/images/png/UI.png";
import Video from "../assets/images/png/videoEditing.png";
import DataScience from "../assets/images/png/dataScience.png";
import Graphic from "../assets/images/png/graphicDesigner.png";
import Modrenskill from "../assets/images/png/ModrensectionPic.png";

const HeroCard = () => {
  const cardData = [
    {
      title: "Animation",
      image: Animation,
    },
    {
      title: "UI/UX Design",
      image: Design,
    },
    {
      title: "Video Editing",
      image: Video,
    },
    {
      title: "Data Science",
      image: DataScience,
    },
    {
      title: "Graphic Design",
      image: Graphic,
    },
  ];
  return (
    <div className="flex  justify-center my-8 mb-0">
      {cardData.map((card) => (
        <div
          key={card.title}
          className="relative w-[310px] h-[384px] overflow-hidden "
          loading="lazy"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2
            className="absolute top-4 left-4 text-white text-2xl font-bold z-10"
            style={inter}
          >
            {card.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

const FeaturesCard = () => {
  const cardData = [
    {
      title: "On-Demand Learning",
      backgroundColor: "bg-[#E3FFF1]",
      iconColor: "#00FF84",
      description:
        "Et massa amet ultrices eget pellentesque vel. Mi imperdiet consectetur aliquam mi enim diam augue. Diam id quam urna volutpat.",
    },
    {
      title: "Expert Trainers",
      backgroundColor: "bg-[#DBD7FF]",
      iconColor: "#3722D3",
      description:
        "Et massa amet ultrices eget pellentesque vel. Mi imperdiet consectetur aliquam mi enim diam augue. Diam id quam urna volutpat.",
    },
    {
      title: "Professional Services",
      backgroundColor: "bg-[#FFF4D9]",
      iconColor: "#FFC023",
      description:
        "Et massa amet ultrices eget pellentesque vel. Mi imperdiet consectetur aliquam mi enim diam augue. Diam id quam urna volutpat.",
    },
  ];

  return (
    <div className="bg-white rounded-b-xl p-6 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
      {cardData.map((card) => (
        <div className="flex-1 px-8 flex flex-col items-start">
          <div
            className={` max-w-[69px] max-h-[69px] w-full h-[69px] rounded-full ${card.backgroundColor}  flex items-center justify-center mb-4`}
          >
            {/* <img src={ConnectPeople} alt="" /> */}
            <ConnectPeople color={card.iconColor} width={24} height={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
          <p className="text-gray-700 mb-2">{card.description}</p>
          <p className="text-gray-500 text-sm">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center max-w-[1200px] mx-auto bg-white">
        <div className="flex-1 px-8 md:px-16 py-12 md:pl-0 ">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[var(--color-primary-v1)] w-[50px] h-[50px] flex items-center justify-center">
              {/* <img loading="lazy" src={ConnectPeople} alt="" /> */}
              <ConnectPeople />
            </div>
            <div>
              <div className="text-[16px] font-bold-400 text-[var(--color-secondary-text-v3)] ">
                Biggest Online
              </div>
              <div className="text-[16px] font-bold-400 text-[var(--color-secondary-text-v3)]">
                Learning Platform
              </div>
            </div>
          </div>
          <h1
            className="text-[40px] md:text-[80px] mb-6 leading-tight"
            style={textStyle}
          >
            Learn without
            <br />
            limits
          </h1>
          <p className="text-[16px] max-w-[492px] text-[var(--color-secondary-text-black-v1)] mb-8">
            Start, switch, or advance your career with more than 10,000 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <Button className="bg-[var(--color-primary)] !text-(var[--color-primary-v1]) hover:bg-green-500 font-[500] text-[14px] py-3 px-8 rounded-lg transition">
            Sign Up for Free
          </Button>
        </div>

        <div className="flex-1 flex items-center justify-center relative w-full h-[400px] md:h-auto">
          <img loading="lazy" src={HeroPic} alt="" />
        </div>
      </div>
      {/* Hero Section Ends */}

      {/* Image Card */}
      <HeroCard />
      {/* Image Card Ends */}

      {/* Modern Skills Section */}
      <div className="bg-black w-full py-10  md:px-16">
        <div className="max-w-[1200px] mx-auto flex flex-col mb-8 md:flex-row items-start md:items-end">
          <div className="flex-1">
            <h2
              className="text-white text-4xl md:text-6xl font-[400] w-max"
              style={{ fontFamily: "Fjalla One" }}
            >
              Modern skills need a<br />
              modern learning approach
            </h2>
          </div>
          <div className="flex-1 mt-6 md:mt-0 md:pl-12 md:max-w-[480px]">
            <p
              className="text-white !text-base md:text-lg font-[400]"
              style={{ fontFamily: "Inter" }}
            >
              Learning solutions shouldn't be one-size-fits-all. For effective
              training, you need the right skills and the right modalities.
              That's where we come in.
            </p>
          </div>
        </div>

        {/* Image and Features Section */}
        <div className="w-full">
          <div className="max-w-[1200px] mx-auto">
            {/* Background image */}
            <div className="w-full h-[250px] md:h-[276px] rounded-t-xl overflow-hidden relative">
              <img
                src={Modrenskill}
                alt="Learning"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Features */}
            <FeaturesCard />
          </div>
        </div>
      </div>

      {/* Image and Features Section Ends */}
    </>
  );
}

const textStyle = {
  fontFamily: "Fjalla One",
  fontWeight: "400",
  lineHeight: "130%",
  letterSpacing: "2%",
  color: "#0E0E0E",
};

const inter = {
  fontFamily: "Inter",
  fontWeight: "700",
  lineHeight: "120%",
  letterSpacing: "0%",
};
