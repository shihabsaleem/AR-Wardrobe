import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import CategoryGrid from "../components/features/Home/Categories";
import PendingSlider from "../components/features/Home/TrendingSlider";
import Footer from "../components/common/Footer";
import { FaStar, FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa";

const HomePage = () => {
    const [user, setUser] = useState("");

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
            <Navbar user={user} setUser={setUser} />
            <Hero />

            {/* Features Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <FaStar className="text-white text-2xl" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
                            <p className="text-gray-600 text-sm">Handpicked products from top brands</p>
                        </div>

                        <div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <FaShieldAlt className="text-white text-2xl" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Secure Shopping</h3>
                            <p className="text-gray-600 text-sm">100% secure payment gateway</p>
                        </div>

                        <div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <FaTruck className="text-white text-2xl" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
                            <p className="text-gray-600 text-sm">Free shipping on orders over ₹999</p>
                        </div>

                        <div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <FaHeadset className="text-white text-2xl" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                            <p className="text-gray-600 text-sm">Always here to help you</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trending Section */}
            <div className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-black text-gray-900 mb-4">
                            Trending Now
                        </h2>
                        <p className="text-xl text-gray-600">
                            Discover the hottest products everyone's talking about
                        </p>
                    </div>
                    <PendingSlider />
                </div>
            </div>

            {/* Categories Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-black text-gray-900 mb-4">
                            Shop by Category
                        </h2>
                        <p className="text-xl text-gray-600">
                            Find exactly what you're looking for
                        </p>
                    </div>
                    <CategoryGrid />
                </div>
            </div>

            {/* AR CTA Section */}
            <div className="py-20 bg-gradient-to-br from-primary-dark via-black to-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                <div className="container mx-auto max-w-4xl px-6 text-center relative z-10">
                    <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium mb-6">
                        ✨ AR Technology
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-6">
                        Try On Virtually
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        See how glasses and accessories look on you before buying. Our advanced AR technology makes online shopping more confident and fun.
                    </p>
                    <a
                        href="/category"
                        className="inline-block px-10 py-5 bg-primary rounded-full font-bold text-lg hover:scale-105 hover:bg-primary-dark transition-all duration-300 shadow-2xl shadow-primary/50"
                    >
                        Experience AR Now
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
