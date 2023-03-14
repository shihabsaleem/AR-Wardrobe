import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:null,
  nextArrow:null,
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
        <div>
          <img src="https://via.placeholder.com/400x300" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/400x300" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/400x300" alt="Slide 3" />
        </div>
        <div>
          <img src="https://via.placeholder.com/400x300" alt="Slide 4" />
        </div>
        <div>
          <img src="https://via.placeholder.com/400x300" alt="Slide 5" />
        </div>
        <div>
          <img src="https://via.placeholder.com/400x300" alt="Slide 6" />
        </div>
      </Slider>
    </div>
  );
};

export default Product_category;
