import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import ProductCard from "../components/common/ProductCard";
import Footer from "../components/common/Footer";
import { item } from "../data";
import { FaSearch } from "react-icons/fa";

const CategoryPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Eyewear", "Sunglasses", "Accessories"];

    const filteredItems = item.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
            <Navbar />

            {/* Header Section */}
            <div className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-black mb-4">Shop Collection</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Discover our premium selection of eyewear and accessories
                    </p>
                </div>
            </div>

            {/* Filters Section */}
            <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md w-full">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex gap-2 flex-wrap justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedCategory === category
                                        ? 'bg-primary text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mt-4 text-center md:text-left">
                        <p className="text-gray-600">
                            Showing <span className="font-bold text-primary">{filteredItems.length}</span> products
                        </p>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    {filteredItems.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredItems.map((product) => (
                                <ProductCard item={product} key={product.id} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
                            <p className="text-gray-600">Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CategoryPage;
