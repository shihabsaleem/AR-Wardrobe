import React, { useState, useEffect } from "react";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import { sliderItems } from "../data";
import { Link } from "react-router-dom";
import "../Components/Style/slider.scss";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  const autoSlide = () => {
    setSlideIndex((slideIndex) =>
      slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0
    );
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="slider-container">
        <div className="arrow left-arrow" onClick={() => handleClick("left")}>
          <KeyboardArrowLeftOutlined />
        </div>
        <div className="arrow right-arrow" onClick={() => handleClick("right")}>
          <KeyboardArrowRightOutlined />
        </div>
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${slideIndex * 100}vw)` }}
        >
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className="slides"
              style={{ backgroundColor: item.bg }}
            >
              <div className="slides-img">
                <img src={item.image} alt="slider" />
              </div>
              <div className="slides-info">
                <h1 className="title">{item.title}</h1>
                <p className="desc">{item.desc}</p>
                <Link to="/" className="buttonc">
                  SHOP NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
