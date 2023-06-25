import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsSunglasses } from "react-icons/bs";

import { FaHatCowboy,FaTshirt } from "react-icons/fa";
import {GiHeartNecklace,GiTrousers,GiShorts } from "react-icons/gi";
import "../Components/Style/procat.scss";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: null,
  nextArrow: null,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const Product_category = () => {
  return (
    <div>
      <Slider {...settings}>
        <div className="catpad">
          <BsSunglasses className="catg"/>
          <div id="c-button" onClick={()=>{localStorage.setItem('category',1);window.location.href='/single'}}> <p>Sunglasses </p></div>
        </div>
        <div className="catpad">
          <FaHatCowboy className="catg" />
          <div id="c-button" onClick={()=>{localStorage.setItem('category',2);window.location.href='/single'}}> <p>Hat </p></div>
        </div>
        <div className="catpad">
          <GiHeartNecklace className="catg" />
          <div id="c-button" onClick={()=>{localStorage.setItem('category',3);window.location.href='/single'}}> <p>Chain</p></div>
        </div>
        <div className="catpad">
          <FaTshirt className="catg"/>
          <div id="c-button" onClick={()=>{localStorage.setItem('category',4);window.location.href='/single'}}> <p>T-shirt</p></div>
        </div>
        <div className="catpad">
          <GiTrousers className="catg" />
          <div id="c-button" onClick={()=>{localStorage.setItem('category',5);window.location.href='/single'}}> <p>Pant</p></div>
        </div>
        <div className="catpad">
          <GiShorts className="catg"/>
          <div id="c-button" onClick={()=>{localStorage.setItem('category',6);window.location.href='/single'}}> <p>Shorts</p></div>
        </div>
             </Slider>
    </div>
  );
 
};

export default Product_category;
