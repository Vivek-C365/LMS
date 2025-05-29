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
import Course1 from "../assets/images/png/course1.png";
import { HomePageData, testimonials } from "../services/data/data";
import { headingStyles } from "../styles/typography";
import CarouselLayout from "../components/common/CarouselLayout";

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
            style={headingStyles.inter}
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
      backgroundColor: "bg-[var(--color-light-green)]",
      iconColor: "var(--color-primary)",
      description:
        "Et massa amet ultrices eget pellentesque vel. Mi imperdiet consectetur aliquam mi enim diam augue. Diam id quam urna volutpat.",
    },
    {
      title: "Expert Trainers",
      backgroundColor: "bg-[var(--color-light-purple)]",
      iconColor: "var(--color-secondary-text-v2)",
      description:
        "Et massa amet ultrices eget pellentesque vel. Mi imperdiet consectetur aliquam mi enim diam augue. Diam id quam urna volutpat.",
    },
    {
      title: "Professional Services",
      backgroundColor: "bg-[var(--color-light-yellow)]",
      iconColor: "var(--color-mid-yellow)",
      description:
        "Et massa amet ultrices eget pellentesque vel. Mi imperdiet consectetur aliquam mi enim diam augue. Diam id quam urna volutpat.",
    },
  ];

  return (
    <div className="bg-white rounded-b-xl p-6 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
      {cardData.map((card) => (
        <div className="flex-1 px-8 flex flex-col items-start" key={card.title}>
          <div
            className={` max-w-[69px] max-h-[69px] w-full h-[69px] rounded-full ${card.backgroundColor}  flex items-center justify-center mb-4`}
          >
            {/* <img src={ConnectPeople} alt="" /> */}
            <ConnectPeople color={card.iconColor} width={28} height={32} />
          </div>
          <h3 className="text-2xl font-[600] mb-2">{card.title}</h3>
          <div className="flex flex-col gap-2 max-w-[340px] w-full ">
            <p
              className="text-[var(--color-secondary-text-black-v1)] mb-2 text-[14px]"
              style={{ fontFamily: "Inter" }}
            >
              {card.description}
              <br />
              <br />
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Education",
  "UI/UX Design",
  "Creative Writing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "AI & Innovation",
  "Graphic Design",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-container custom-flex-1 flex-col md:flex-row">
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
            style={headingStyles.h1}
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

        <div className="flex-1 custom-flex-1 relative w-full h-[400px] md:h-auto">
          <img loading="lazy" src={HeroPic} alt="" />
        </div>
      </div>

      {/* Image Card */}
      <HeroCard />

      {/* learning approach */}
      <div className=" bg-black">
        {/* Modern Skills Section */}
        <div className=" w-full py-10 md:px-16">
          <div className="max-w-[1200px] mx-auto flex mt-15 flex-col mb-8 md:flex-row items-start md:items-end">
            <div className="flex-1">
              <h2
                className="text-white text-4xl md:text-[56px] font-[400] w-auto"
                style={headingStyles.h2}
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

        {/* Stats Section */}
        <div className="max-w-[1200px] bg-[var(--color-secondary-text-black-v1)] !px-10 mx-auto flex flex-col md:flex-row justify-between items-center rounded-md md:px-8">
          {[1, 2, 3, 4].map((_, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col items-center py-6 relative"
            >
              <div
                className="text-[48px] font-bold text-[var(--color-primary)] leading-none mb-2"
                style={{ fontFamily: "inter" }}
              >
                500+
              </div>
              <div
                className="text-white text-[12px] font-semibold text-center"
                style={{ fontFamily: "inter" }}
              >
                Students Who Achieve Great Success
              </div>
              {idx < 3 && (
                <div className="hidden md:block stats-divider absolute right-0 top-1/2 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Explore Courses Section */}
      <div className="w-full bg-black py-12">
        <div className="max-w-[1200px] flex flex-col items-center mx-auto">
          {/* Heading */}
          <div className="max-w-[1096px]">
            <h2
              className="text-white text-center text-4xl md:text-[56px] font-normal mb-8"
              style={headingStyles.h2}
            >
              Explore Inspiring Online Courses
            </h2>
            {/* Filter Chips */}
            <div className="flex flex-wrap py-5 px-13 justify-center gap-3 mb-10">
              {Categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`category-button ${i === 0 ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {HomePageData.map((course, i) => (
              <div
                key={i}
                className="bg-[#181818] rounded-xl max-w-[291px] max-h-[362px] h-[362px] gap-4 p-4 overflow-hidden shadow-md flex flex-col"
              >
                <img src={Course1} alt="Course" className="w-full rounded-xl" />
                <div className=" flex-1 flex flex-col justify-between">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center ">
                      <span className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold mr-2">
                        👤
                      </span>
                      <span className="text-[14px] text-gray-300">
                        by {course.author}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-lg">
                      {course.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between ">
                    <span
                      className="text-[var(--color-primary)] text-xs font-medium"
                      style={{ fontFamily: "Inter" }}
                    >
                      {course.students}
                    </span>
                    <span
                      className="flex items-center text-[var(--color-primary)] text-xs font-medium"
                      style={{ fontFamily: "Inter" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="mr-1"
                      >
                        <path d="M8 12.472l-4.472 2.35.854-4.98L1 6.528l5.014-.728L8 1.944l1.986 3.856 5.014.728-3.382 3.314.854 4.98z" />
                      </svg>
                      {course.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="flex justify-center">
            <button className="px-8 py-2 border border-white rounded-[10px] text-white hover:bg-[var(--color-primary)] hover:text-black transition">
              See More
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div className="w-full flex flex-col items-center my-12 px-4">
        <h2
          className="text-black text-center text-4xl md:text-[48px] font-bold mb-2"
          style={{ fontFamily: "Fjalla One" }}
        >
          Why Students Love Learning+
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl">
          Whether it's a first brush on canvas or the last frame in an
          animation, Learning+ is here to support you on every step of your
          creative journey.
        </p>

        <CarouselLayout contentList={testimonials} />
      </div>
    </>
  );
}
