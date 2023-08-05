import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsSunglasses } from "react-icons/bs";
import { FaTshirt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiSpectacles, GiTrousers, GiShorts, GiEarrings } from "react-icons/gi";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-all shadow-lg hover:scale-110"
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-all shadow-lg hover:scale-110"
  >
    <FaChevronLeft />
  </button>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const categories = [
  { id: 1, name: "Sunglasses", icon: BsSunglasses },
  { id: 2, name: "Earrings", icon: GiEarrings },
  { id: 3, name: "Specs", icon: GiSpectacles },
  { id: 4, name: "T-shirt", icon: FaTshirt },
  { id: 5, name: "Pants", icon: GiTrousers },
  { id: 6, name: "Shorts", icon: GiShorts },
];

const TrendingSlider = () => {
  const handleCategoryClick = (categoryId) => {
    localStorage.setItem("category", categoryId);
    window.location.href = "/category";
  };

  return (
    <div className="py-12 px-4 relative">
      <Slider {...settings}>
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.id} className="px-2">
              <div
                onClick={() => handleCategoryClick(category.id)}
                className="bg-white rounded-2xl shadow-lg p-6 h-32 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group border border-gray-100"
              >
                <Icon className="text-5xl text-primary group-hover:text-primary-dark transition-colors" />
                <p className="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors">
                  {category.name}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TrendingSlider;
