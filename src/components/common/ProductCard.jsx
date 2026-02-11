import React, { useState } from "react";
import { FaHeart, FaShoppingBag, FaStar, FaEye } from "react-icons/fa";

const ProductCard = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    localStorage.setItem('id', item.id);
    window.location.href = '/pro';
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    // Quick view functionality
    handleClick();
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400 text-xs" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400 text-xs opacity-50" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300 text-xs" />);
      }
    }
    return stars;
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-primary/30"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* Glassmorphic overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 px-4">
            <button
              onClick={handleQuickView}
              className="flex-1 px-4 py-2.5 bg-white/90 backdrop-blur-md text-gray-900 rounded-full font-bold text-sm hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
            >
              <FaEye />
              Quick View
            </button>
            <button
              onClick={handleLike}
              className={`p-2.5 rounded-full hover:scale-110 transition-all duration-300 shadow-xl ${isLiked
                  ? "bg-red-500 text-white"
                  : "bg-white/90 backdrop-blur-md text-gray-700"
                }`}
            >
              <FaHeart className={isLiked ? "animate-pulse" : ""} />
            </button>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {item.isNew && (
            <div className="px-3 py-1 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold rounded-full shadow-lg">
              NEW
            </div>
          )}
          {item.discount && (
            <div className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
              -{item.discount}%
            </div>
          )}
        </div>

        {/* Wishlist button (always visible on mobile) */}
        <button
          onClick={handleLike}
          className={`md:hidden absolute top-3 left-3 p-2 rounded-full transition-all duration-300 shadow-lg ${isLiked
              ? "bg-red-500 text-white"
              : "bg-white/90 backdrop-blur-md text-gray-700"
            }`}
        >
          <FaHeart className="text-sm" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {item.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-0.5">
            {renderStars(item.rating || 4.5)}
          </div>
          <span className="text-xs font-semibold text-gray-600">
            ({item.reviews || "128"})
          </span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                ₹{item.price}
              </span>
              {item.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{item.originalPrice}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            className="p-2.5 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 group/btn"
          >
            <FaShoppingBag className="text-sm group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
