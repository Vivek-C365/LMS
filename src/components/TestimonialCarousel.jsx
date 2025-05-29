import React from "react";
import CompanyLogo from "../assets/images/png/CompanyLogo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
    name: "Kyle Merwin",
    title: "CO-owner",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Learning+ helped me achieve my goals. The courses are well structured and the instructors are amazing!",
    name: "Jane Doe",
    title: "Designer",
  },
  {
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "A fantastic platform for anyone looking to upskill. Highly recommended!",
    name: "John Smith",
    title: "Developer",
  },
  {
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    text: "The course content is excellent and the community is very supportive.",
    name: "Emily Johnson",
    title: "Student",
  },
  {
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    text: "I learned so much and the hands-on projects were incredibly valuable.",
    name: "Michael Brown",
    title: "Freelancer",
  },
  {
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Absolutely loved the instructors! They made learning complex topics easy.",
    name: "Sarah Davis",
    title: "Educator",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
    centerMode: true,
    partialVisibilityGutter: 160,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
    centerMode: true,
    partialVisibilityGutter: 100,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    centerMode: true,
    partialVisibilityGutter: 60,
  },
};
// Custom Dot Component
const CustomDot = ({ onClick, ...rest }) => {
  const { active } = rest;

  return (
    <button
      className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
        active ? "bg-green-500 scale-125" : "bg-gray-300"
      }`}
      onClick={() => onClick()}
    />
  );
};

export default function TestimonialCarousel() {
  return (
    <div className="w-full flex flex-col items-center my-12 px-4">
      <h2
        className="text-black text-center text-4xl md:text-[48px] font-bold mb-2"
        style={{ fontFamily: "Fjalla One" }}
      >
        Why Students Love Learning+
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl">
        Whether it's a first brush on canvas or the last frame in an animation,
        Learning+ is here to support you on every step of your creative journey.
      </p>

      <div className="w-full mx-auto relative mb-16">
        <style>
          {`
            .carousel-container .react-multi-carousel-item {
              transition: all 0.3s ease;
            }
            
            .carousel-container .react-multi-carousel-item:not(.react-multi-carousel-item--active) {
              opacity: 0.4;
              transform: scale(0.9);
            }

            .carousel-container .react-multi-carousel-item--active {
              opacity: 1;
              transform: scale(1);
            }

            .mt-4 .react-multi-carousel-dot-list {
              display: flex;
              justify-content: center;
              gap: 8px;
              margin-top: 1rem;
            }
          `}
        </style>
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          centerMode={true}
          ssr={true}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          renderDotsOutside={true}
          customDot={<CustomDot />}
          rewindWithAnimation={true}
          dotListClass="flex justify-center mt-4"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center p-6 md:p-8 mx-2"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover mr-0 md:mr-8 mb-4 md:mb-0 flex-shrink-0"
              />
              <div className="flex-1 relative">
                <div className="absolute top-0 right-0 text-4xl text-purple-700 font-bold leading-none">
                  &ldquo;
                </div>
                <p className="text-gray-800 mb-4 mt-6 overflow-y-auto">
                  {testimonial.text}
                </p>
                <div className="font-bold text-lg">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div>
        <img
          src={CompanyLogo}
          alt="Company Logos"
          className="w-full max-w-xs"
        />
      </div>
    </div>
  );
}
