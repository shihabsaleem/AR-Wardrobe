import React, { useState } from "react";

import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const CartItem = () => {
  const [items, setItems] = useState([]);

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const updateQuantity = (index, delta) => {
    const newItems = [...items];
    newItems[index].quantity = Math.max(1, newItems[index].quantity + delta);
    setItems(newItems);
  };



  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };



  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-black text-gray-900 mb-12">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center shadow-xl">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 text-lg">Add some amazing products to get started!</p>
            <a
              href="/category"
              className="inline-block px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30"
            >
              Start Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(index, -1)}
                            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                          >
                            <FaMinus className="text-sm" />
                          </button>
                          <span className="text-lg font-bold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(index, 1)}
                            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                          >
                            <FaPlus className="text-sm" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="text-2xl font-black text-primary">
                            ₹{item.price * item.quantity}
                          </div>
                          <div className="text-sm text-gray-500">
                            ₹{item.price} each
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(index)}
                      className="w-10 h-10 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-xl sticky top-24 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span className="font-semibold">₹{(calculateTotal() * 0.18).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">Total</span>
                      <span className="text-3xl font-black text-primary">
                        ₹{(calculateTotal() * 1.18).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30 mb-4">
                  Proceed to Checkout
                </button>

                <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
