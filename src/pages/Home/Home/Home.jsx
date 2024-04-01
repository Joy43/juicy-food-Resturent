import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

import Faq from "../Faq/Faq";

import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";

const Home = () => {
  return (
    <div className="gap-5">
      <Helmet>
        <title> Juicy Restorent | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>

      <ReviewFeedback></ReviewFeedback>
      <Faq></Faq>
    </div>
  );
};

export default Home;
