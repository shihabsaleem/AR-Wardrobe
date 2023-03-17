import React from "react";
import "./../Components/Style/home.scss";
import Navbar from "../Components/Navbar";
import Announce from "../Components/Announce";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import ProCat from "../Components/ProCat";

const Home = () => {
  return (
    <div className="home">
      <Announce />
      <Navbar />
      <Slider />
      <ProCat/>
     
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
