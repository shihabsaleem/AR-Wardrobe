import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./Style/slider.scss";
import { sliderItems } from "../data";
import slider_img from "../Assets/img0.png"

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {};
  return (
    <div>
      <div className="slider-container">
        <div className="arrow left-arrow" onClick={() => handleClick("left")}>
          <KeyboardArrowLeftOutlined />
        </div>
        <div className="slider-wrapper">
          {sliderItems.map((item) => (
            <div className="slides" bg={item.bg}>
              <div className="slides-img">
                <img src={slider_img} alt="slider" />
              </div>
              <div className="slides-info">
                <h1 className="title">{item.title}</h1>

                <p className="desc">{item.desc} </p>

                <button className="button">SHOP NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="arrow right-arrow" onClick={() => handleClick("right")}>
        <KeyboardArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
