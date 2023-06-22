import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsSunglasses } from "react-icons/bs";
import { Link } from "react-router-dom";

import { FaHatCowboy, FaTshirt } from "react-icons/fa";
import { GiHeartNecklace, GiTrousers, GiShorts } from "react-icons/gi";
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
          <Link to="/pro" className="navbar-menu">
            <BsSunglasses className="catg" />
            <div className="c-button" onClick="display-cat()">
              {" "}
              <p>Sunglasses </p>
            </div>
          </Link>
        </div>

        <div className="catpad">
          <Link to="/pro" className="navbar-menu">
            <FaHatCowboy className="catg" />
            <div className="c-button" onClick="display-cat()">
              {" "}
              <p>Hat </p>
            </div>
          </Link>
        </div>

        <div className="catpad">
          <Link to="/pro" className="navbar-menu">
            <GiHeartNecklace className="catg" />
            <div className="c-button" onClick="display-cat()">
              {" "}
              <p>Chain</p>
            </div>
          </Link>
        </div>

        <div className="catpad">
          <Link to="/pro" className="navbar-menu">
            <FaTshirt className="catg" />
            <div className="c-button" onClick="display-cat()">
              {" "}
              <p>T-shirt</p>
            </div>
          </Link>
        </div>

        <div className="catpad">
          <Link to="/pro" className="navbar-menu">
            <GiTrousers className="catg" />
            <div className="c-button" onClick="display-cat()">
              {" "}
              <p>Pant</p>
            </div>
          </Link>
        </div>

        <div className="catpad">
          <Link to="/pro" className="navbar-menu">
            <GiShorts className="catg" />
            <div className="c-button" onClick="display-cat()">
              {" "}
              <p>Shorts</p>
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default Product_category;
