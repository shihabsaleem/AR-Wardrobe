import React, { useState } from "react";
import { item } from "../../../data";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart, FaStar, FaCheck } from "react-icons/fa";

function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const current = localStorage.getItem("id");
  const navigate = useNavigate();
  const products = item;

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const selectedProduct = products.find(
    (product) => product.id === parseInt(current)
  );

  const handleCart = () => {
    localStorage.setItem('idsel', selectedProduct.id);
    window.location.href = '/cart';
  };

  const handleTryNow = () => {
    navigate("/try-on", { state: { product: selectedProduct } });
  };

  if (!selectedProduct) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Products</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative">
            <div className="sticky top-24 bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-12 shadow-xl">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-auto object-contain max-h-[600px] drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              {/* Badge */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-primary text-white rounded-full text-sm font-bold shadow-lg">
                Premium
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-black text-gray-900 mb-3 leading-tight">
                {selectedProduct.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <span className="text-gray-600">(128 reviews)</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-black text-primary">
                  ₹{selectedProduct.price}
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-2xl text-gray-400 line-through">
                    ₹{selectedProduct.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {selectedProduct.long4desc || selectedProduct.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                Select Size
              </label>
              <div className="flex gap-3">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeChange(size)}
                    className={`w-16 h-16 rounded-xl font-bold text-lg transition-all duration-300 ${selectedSize === size
                        ? 'bg-primary text-white shadow-lg scale-110'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold text-xl transition-colors"
                >
                  -
                </button>
                <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold text-xl transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handleTryNow}
                className="flex-1 px-8 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30 flex items-center justify-center gap-3"
              >
                <span className="text-2xl">👓</span>
                Try On in AR
              </button>
              <button
                onClick={handleCart}
                className="flex-1 px-8 py-5 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
              >
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaCheck className="text-primary" />
                </div>
                <span className="font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaCheck className="text-primary" />
                </div>
                <span className="font-medium">Easy Returns</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaCheck className="text-primary" />
                </div>
                <span className="font-medium">1 Year Warranty</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaCheck className="text-primary" />
                </div>
                <span className="font-medium">Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;