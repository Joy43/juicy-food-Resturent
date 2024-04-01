import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide/1.gif";
import slide2 from "../../../assets/home/slide/2.gif";
import slide3 from "../../../assets/home/slide/3.gif";
import slide4 from "../../../assets/home/slide/4.gif";
import slide5 from "../../../assets/home/slide/5.gif";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const Category = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [slide1, slide2, slide3, slide4, slide5];
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <div>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>

      <div className="w-full justify-center  h-[240px] md:h-[540px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 px-10">
        <div className="relative overflow-hidden">
          {/* dots */}
          <div className="flex h-fit rounded-full z-50 absolute right-0 bottom-1/2 w-fit gap-1 rotate-90">
            {sliders.map((_, inx) => (
              <button
                key={inx}
                onClick={() => setCurrentSlider(inx)}
                className={`rounded-full duration-300 bg-white ${
                  currentSlider === inx ? "w-10" : "w-2"
                } h-2`}
              ></button>
            ))}
          </div>
          {/* slider container */}
          <div
            className="ease-linear duration-300 flex flex-col h-60 sm:h-96 md:h-[540px] transform-gpu relative"
            style={{ transform: `translateY(-${currentSlider * 100}%)` }}
          >
            {/* sliders */}
            {sliders.map((_, inx) => (
              <div
                key={inx}
                className="min-w-full duration-200 before:content-['Image'] before:bg-black/20 before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center before:text-black/40 before:inset-0 relative"
              >
                <img
                  src={_}
                  className="w-full h-60 sm:h-96 md:h-[540px] object-cover"
                  alt={`Slider - ${inx + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
