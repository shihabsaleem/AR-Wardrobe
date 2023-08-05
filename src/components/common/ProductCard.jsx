import React from "react";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

const ProductCard = ({ item }) => {
  const handleClick = () => {
    localStorage.setItem('id', item.id);
    window.location.href = '/pro';
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
            <button
              onClick={handleClick}
              className="px-6 py-2.5 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg"
            >
              <FaShoppingBag />
              View Details
            </button>
            <button className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
              <FaHeart className="text-red-500" />
            </button>
          </div>
        </div>

        {/* Badge */}
        {item.isNew && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
            NEW
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-primary">
              ₹{item.price}
            </span>
            {item.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ₹{item.originalPrice}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm font-semibold text-gray-700">
              {item.rating || "4.5"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
