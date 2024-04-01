// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link } from "react-router-dom";
import img1 from "../../../assets/home/cover/1.png";
import img2 from "../../../assets/home/cover/2.png";
import img3 from "../../../assets/home/cover/3.png";
import img4 from "../../../assets/home/cover/3.png";
import img5 from "../../../assets/home/cover/4.png";
import img6 from "../../../assets/home/cover/5.png";
import { useState } from "react";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    { img: img1, tags: "prizza" },
    { img: img2, tags: "Barger" },
    { img: img3, tags: "Noduse" },
    { img: img4, tags: "kitchen fry" },
    { img: img5, tags: "Banna juice" },
    { img: img6, tags: "Coconut food" },
  ];
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );

  return (
    <div>
      <div className="max-w-7xl mx-auto h-[540px] lg:h-[670px] px-3 lg:px-10 flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 relative">
        <div className="bg-[#f3f9fc] w-full absolute left-0 h-[540px] lg:h-[670px] -z-40"></div>
        <div className="w-2/3 lg:w-1/3 text-center lg:text-left space-y-2 lg:space-y-5 py-5">
          <h1 className="text-lg md:text-2xl lg:text-[40px] font-bold">
            50+ Tested Food
          </h1>
          <p className="text-[#616161] text-xs md:text-lg">
            Food Cafe and Restaurant React Template For Restaurant and Cafe,
            Table Reservation
          </p>
          <Link to="/menu">
            <button className="font-bold py-2 xl:py-3 text-xs md:text-base lg:text-lg xl:text-xl hover:scale-95 duration-300 px-4 lg:px-10 text-white bg-[#2f9fb8]">
              See Menu
            </button>
          </Link>
        </div>
        <div className="sm:w-2/3 h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
          {/* arrow */}
          <button
            onClick={nextSlider}
            className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite "
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* slider container */}
          <div
            className="ease-linear duration-300 flex gap-[2%]"
            style={{ transform: `translateX(-${currentSlider * 52}%)` }}
          >
            {/* sliders */}
            {sliders.map((slide, inx) => (
              <div
                key={inx}
                className={`${
                  currentSlider === inx
                    ? "h-[310px] md:h-[310px] lg:h-[580px] "
                    : "h-[260px] md:h-[280px] lg:h-[480px]"
                } min-w-[50%] bg-black/30 relative duration-200`}
              >
                <img
                  src={slide.img}
                  className="w-full h-full"
                  alt={slide.tags}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
