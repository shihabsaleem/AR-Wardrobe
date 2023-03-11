import React from "react";
import "./../Components/Style/home.scss";
import Navbar from "../Components/Navbar";
import Announce from "../Components/Announce";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
