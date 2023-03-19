import React from "react";
import Announce from "../Components/Announce";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SingleItem from "../Components/SingleItem";

const Category = () => {
  return (
    <div>
      <Announce />
      <Navbar />

      <SingleItem />
      <Footer />
    </div>
  );
};

export default Category;
