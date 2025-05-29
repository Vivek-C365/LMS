import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const CarouselLayout = ({ contentList }) => {
  const Data = contentList ?? [];

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

  return (
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
        {Data.map((Data, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center p-6 md:p-8 mx-2"
          >
            <img
              src={Data.image}
              alt={Data.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover mr-0 md:mr-8 mb-4 md:mb-0 flex-shrink-0"
            />
            <div className="flex-1 relative">
              <div className="absolute top-0 right-0 text-4xl text-purple-700 font-bold leading-none">
                &ldquo;
              </div>
              <p className="text-gray-800 mb-4 mt-6 overflow-y-auto">
                {Data.text}
              </p>
              <div className="font-bold text-lg">{Data.name}</div>
              <div className="text-gray-500 text-sm">{Data.title}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default CarouselLayout;
