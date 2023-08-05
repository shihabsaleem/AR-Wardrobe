import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCube, FaMagic, FaShoppingBag } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="relative w-full bg-gradient-to-br from-primary-dark via-black to-gray-900 overflow-x-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Main content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-120px)]">
                    {/* Left content */}
                    <div className="text-white space-y-6 order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium">
                            <FaMagic className="text-primary-light" />
                            <span>Powered by AR Technology</span>
                        </div>

                        {/* Main heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                            <span className="block text-white">Try Before</span>
                            <span className="block text-primary-light mt-2">You Buy</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                            Experience the future of online shopping with our cutting-edge AR try-on technology. See how products look on you in real-time.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                to="/category"
                                className="group px-8 py-4 bg-primary rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 hover:bg-primary-dark transition-all duration-300 shadow-2xl shadow-primary/50"
                            >
                                Start Shopping
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/category"
                                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
                            >
                                Try AR Now
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-6 md:gap-8 pt-8 border-t border-white/10">
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
                                <div className="text-xs md:text-sm text-gray-400">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                                <div className="text-xs md:text-sm text-gray-400">Products</div>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-white">99%</div>
                                <div className="text-xs md:text-sm text-gray-400">Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    {/* Right content - 3D showcase */}
                    <div className="relative w-full order-1 lg:order-2">
                        <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                            {/* Floating card */}
                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
                                {/* AR Preview placeholder */}
                                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                                    <FaCube className="text-6xl md:text-8xl text-white/30 animate-spin-slow" />
                                </div>

                                {/* Features */}
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3 text-white">
                                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <FaMagic className="text-primary-light text-sm" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-sm md:text-base">Real-time AR</div>
                                            <div className="text-xs md:text-sm text-gray-400">Instant virtual try-on</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 text-white">
                                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <FaCube className="text-primary-light text-sm" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-sm md:text-base">3D Models</div>
                                            <div className="text-xs md:text-sm text-gray-400">Realistic product rendering</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 text-white">
                                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <FaShoppingBag className="text-primary-light text-sm" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-sm md:text-base">Easy Shopping</div>
                                            <div className="text-xs md:text-sm text-gray-400">Seamless checkout</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="hidden md:block absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-20 h-20 lg:w-24 lg:h-24 bg-primary/20 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center animate-float">
                                <span className="text-2xl lg:text-3xl">👓</span>
                            </div>
                            <div className="hidden md:block absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-16 h-16 lg:w-20 lg:h-20 bg-primary-light/20 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center animate-float-delayed">
                                <span className="text-xl lg:text-2xl">✨</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/50 animate-bounce">
                <span className="text-sm">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
