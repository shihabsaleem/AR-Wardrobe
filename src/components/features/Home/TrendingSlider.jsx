import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsSunglasses } from "react-icons/bs";
import { FaTshirt, FaChevronLeft, FaChevronRight, FaFire } from "react-icons/fa";
import { GiSpectacles, GiTrousers, GiShorts, GiEarrings } from "react-icons/gi";

// Custom Arrow Components with Enhanced Glassmorphism
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-2xl border border-white/40 text-primary rounded-2xl flex items-center justify-center hover:from-primary hover:to-primary-dark hover:text-white hover:border-primary/50 transition-all duration-300 shadow-2xl hover:scale-110 hover:rotate-3 group"
    aria-label="Next"
  >
    <FaChevronRight className="group-hover:translate-x-0.5 transition-transform" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-2xl border border-white/40 text-primary rounded-2xl flex items-center justify-center hover:from-primary hover:to-primary-dark hover:text-white hover:border-primary/50 transition-all duration-300 shadow-2xl hover:scale-110 hover:-rotate-3 group"
    aria-label="Previous"
  >
    <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
  </button>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  dotsClass: "slick-dots !bottom-[-40px]",
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const categories = [
  {
    id: 1,
    name: "Sunglasses",
    icon: BsSunglasses,
    count: "50+",
    gradient: "from-amber-400 via-orange-400 to-red-500",
    glowColor: "shadow-amber-500/50",
    bgGradient: "from-amber-500/10 via-orange-500/5 to-red-500/10"
  },
  {
    id: 2,
    name: "Earrings",
    icon: GiEarrings,
    count: "30+",
    gradient: "from-pink-400 via-rose-400 to-fuchsia-500",
    glowColor: "shadow-pink-500/50",
    bgGradient: "from-pink-500/10 via-rose-500/5 to-fuchsia-500/10"
  },
  {
    id: 3,
    name: "Specs",
    icon: GiSpectacles,
    count: "45+",
    gradient: "from-cyan-400 via-blue-400 to-indigo-500",
    glowColor: "shadow-cyan-500/50",
    bgGradient: "from-cyan-500/10 via-blue-500/5 to-indigo-500/10"
  },
  {
    id: 4,
    name: "T-shirt",
    icon: FaTshirt,
    count: "100+",
    gradient: "from-purple-400 via-violet-400 to-purple-600",
    glowColor: "shadow-purple-500/50",
    bgGradient: "from-purple-500/10 via-violet-500/5 to-purple-600/10"
  },
  {
    id: 5,
    name: "Pants",
    icon: GiTrousers,
    count: "60+",
    gradient: "from-emerald-400 via-teal-400 to-cyan-500",
    glowColor: "shadow-emerald-500/50",
    bgGradient: "from-emerald-500/10 via-teal-500/5 to-cyan-500/10"
  },
  {
    id: 6,
    name: "Shorts",
    icon: GiShorts,
    count: "40+",
    gradient: "from-red-400 via-rose-400 to-pink-500",
    glowColor: "shadow-red-500/50",
    bgGradient: "from-red-500/10 via-rose-500/5 to-pink-500/10"
  },
];

const TrendingSlider = () => {
  const handleCategoryClick = (categoryId) => {
    localStorage.setItem("category", categoryId);
    window.location.href = "/category";
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-20 relative">
      {/* Custom CSS for enhanced dots */}
      <style>{`
        .slick-dots li button:before {
          font-size: 10px;
          color: #14b8a6;
          opacity: 0.3;
          transition: all 0.3s ease;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #14b8a6;
          transform: scale(1.3);
        }
        .slick-dots li:hover button:before {
          opacity: 0.7;
        }
        
        /* Shimmer animation */
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        
        /* Floating animation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <Slider {...settings}>
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div key={category.id} className="px-4 py-4">
              <div
                onClick={() => handleCategoryClick(category.id)}
                className="relative group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-white/50 via-white/30 to-white/20 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-2xl p-8 h-48 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:border-white/80 overflow-hidden group-hover:from-white/70 group-hover:via-white/50 group-hover:to-white/40">

                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100"></div>

                  {/* Floating gradient orb */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:scale-150`}></div>
                  <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr ${category.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-700 group-hover:scale-150`}></div>

                  {/* Trending badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-md border border-orange-300/50 text-white text-xs font-bold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <FaFire className="text-yellow-300 animate-pulse" />
                    <span>Hot</span>
                  </div>

                  {/* Product count badge with enhanced design */}
                  <div className={`absolute top-3 right-3 px-4 py-2 bg-gradient-to-br ${category.gradient} backdrop-blur-xl border-2 border-white/60 text-white text-sm font-black rounded-2xl shadow-2xl ${category.glowColor} transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    {category.count}
                  </div>

                  {/* Icon with gradient and enhanced animations */}
                  <div className="relative z-10 float-animation">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-150`}></div>
                    <Icon className={`relative text-6xl bg-gradient-to-br ${category.gradient} bg-clip-text text-transparent group-hover:scale-125 transition-all duration-500 drop-shadow-2xl filter group-hover:drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]`} />
                  </div>

                  {/* Category name with gradient on hover */}
                  <p className="relative z-10 text-base font-black text-gray-800 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 tracking-wide">
                    {category.name}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl`}></div>
                </div>

                {/* Outer glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10 scale-95 group-hover:scale-105`}></div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TrendingSlider;
