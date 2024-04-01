import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed pt-8 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex text-white  shadow-lg justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2024</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            There are countless food products ranging from fruits and vegetables
            to packaged goods, snacks, beverages, and more. Any additional
            information you can provide will help me assist you better.
          </p>
          <Link to="/menu">
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
