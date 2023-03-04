import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import React from "react";
import "./Style/slider.scss";

const Slider = () => {
  return (
    <div>
      <div className="slider-container">
        <div className="arrow left-arrow">
          <KeyboardArrowLeftOutlined />
        </div>
        <div className="arrow right-arrow">
          <KeyboardArrowRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default Slider;
