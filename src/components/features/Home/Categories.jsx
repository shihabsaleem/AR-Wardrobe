import React from "react";
import { item } from "../../../data";
import ProductCard from "../../common/ProductCard";
import { Link } from "react-router-dom";
import { FaArrowRight, FaFire } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 relative">
      {/* Decorative floating elements */}
      <div className="absolute top-0 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Section Header with Glassmorphism */}
      <div className="relative z-10 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/40 backdrop-blur-2xl rounded-full border border-white/60 text-sm font-bold text-primary mb-6 shadow-xl">
          <FaFire className="text-orange-500 animate-pulse" />
          Featured Collection
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          <span className="bg-gradient-to-r from-primary via-primary-dark to-primary-light bg-clip-text text-transparent">
            Popular
          </span>{" "}
          Products
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of trending items that everyone loves
        </p>
      </div>

      {/* Products Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {item.slice(0, 8).map((product) => (
          <ProductCard item={product} key={product.id} />
        ))}
      </div>

      {/* View All Button with Glassmorphism */}
      <div className="relative z-10 text-center mt-12">
        <Link
          to="/category"
          className="inline-flex items-center gap-3 px-10 py-4 bg-white/40 backdrop-blur-2xl border border-white/60 text-primary font-bold rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white hover:border-transparent hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 shadow-xl group"
        >
          View All Products
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default Categories;
