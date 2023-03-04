import {
  Directions,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./Style/slider.scss";
import slider1 from "./../Assets/img0.png";
import slider2 from "./../Assets/img2.png";
import slider3 from "./../Assets/img1.png";
//import { sliderItems } from "../data";

const Slider = () => {
  //const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {};
  return (
    <div>
      <div className="slider-container">
        <div className="arrow left-arrow" onClick={() => handleClick("left")}>
          <KeyboardArrowLeftOutlined />
        </div>
        <div className="slider-wrapper">
          <div className="slides">
            <div className="slides-img">
              <img src={slider1} alt="fashion" />
            </div>
            <div className="slides-info">
              <h1 className="title">Autumn Fashion</h1>

              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <button className="button">SHOP NOW</button>
            </div>
          </div>
          <div className="slides">
            <div className="slides-img">
              <img src={slider2} alt="fashion" />
            </div>
            <div className="slides-info">
              <h1 className="title">Winter Fashion</h1>

              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <button className="button">SHOP NOW</button>
            </div>
          </div>
          <div className="slides">
            <div className="slides-img">
              <img src={slider3} alt="fashion" />
            </div>
            <div className="slides-info">
              <h1 className="title">Summer Fashion</h1>

              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <button className="button">SHOP NOW</button>
            </div>
          </div>
        </div>
        <div className="arrow right-arrow" onClick={() => handleClick("right")}>
          <KeyboardArrowRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default Slider;
