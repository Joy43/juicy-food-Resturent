import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ReviewFeedback = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlider, setCurrentSlider] = useState(0);

  console.log(reviews);
  useEffect(() => {
    axios
      .get("https://bistro-boss-server-with-cart-part-4.vercel.app/reviewsdb")
      .then((response) => {
        // Set state with response.data
        setReviews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  console.log(reviews);
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? reviews.length - 2 : currentSlider - 1
    );

  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === reviews.length - 2 ? 0 : currentSlider + 1
    );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div>
      <SectionTitle
        subHeading="What Our Client Say"
        heading={
          <Link to="dashboard/review">
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Add Review
            </button>
          </Link>
        }
      ></SectionTitle>

      <div className="max-w-full min-w-[350px] mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
        <div className="relative overflow-hidden border-spacing-2">
          <div className="absolute shadow-2xl w-full h-full flex items-center justify-between z-50 px-5">
            <button
              onClick={prevSlider}
              className="flex justify-center bg-slate-100 text-green-300 items-center rounded-full w-6 h-6 md:w-8 md:h-8"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="w-4 h-4 md:w-6 md:h-6 icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
              >
                {" "}
                <g strokeWidth="0"></g>{" "}
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>{" "}
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="black"
                    d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                  ></path>
                </g>
              </svg>
            </button>

            <button
              onClick={prevSlider}
              className="flex justify-center bg-slate-100 text-green-300 items-center rounded-full w-6 h-6 md:w-8 md:h-8"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="w-4 h-4 md:w-6 md:h-6 icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                transform="rotate(180)"
              >
                {" "}
                <g strokeWidth="0"></g>{" "}
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>{" "}
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill="black"
                    d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          <div
            className="ease-linear shadow-2xl duration-300 flex"
            style={{
              transform: `translateX(-${
                currentSlider * (isSmallScreen ? 100 : 50)
              }%)`,
            }}
          >
            {reviews.map((each, idx) => (
              <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
                <div className="h-full p-8 rounded shadow-[0px_4px_12px]">
                  <div className="flex flex-col items-center mx-24 my-16">
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={each?.Rating}
                      readOnly
                    />
                  </div>

                  <p className="leading-relaxed mb-6 ">{each?.textarea}</p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src={each.fileUpload}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium ">
                        {each.name}
                      </span>
                      {/* <span className="">{each?.Rating}</span> */}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewFeedback;
