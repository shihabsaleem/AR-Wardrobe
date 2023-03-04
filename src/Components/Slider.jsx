import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import React from "react";
import "./Style/slider.scss";
import slider1 from "./../Assets/img1.png";
import slider2 from "./../Assets/img2.png";

const Slider = () => {
  return (
    <div>
      <div className="slider-container">
        <div className="arrow left-arrow">
          <KeyboardArrowLeftOutlined />
        </div>
        <div className="slider-wrapper">
          <div className="slides">
            <div className="slide-img">
              <img src={slider1} alt="fashion" />
            </div>
            <div className="slide-info"></div>
          </div>
        </div>
        <div className="arrow right-arrow">
          <KeyboardArrowRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default Slider;
