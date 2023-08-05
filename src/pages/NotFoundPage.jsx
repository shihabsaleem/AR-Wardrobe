import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
// import "../styles/error.scss";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 flex flex-col justify-center items-center text-center py-24 px-5">
                <h1 className="text-[6rem] font-bold text-[#333] mb-2 leading-none">404</h1>
                <h2 className="text-2xl font-semibold text-[#555] mb-5 uppercase tracking-wide">Page Not Found</h2>
                <p className="text-lg text-[#666] mb-8">The page you are looking for does not exist.</p>
                <a href="/" className="px-8 py-3 bg-[teal] text-white rounded-full font-medium transition-colors hover:bg-[#006767] uppercase text-sm tracking-wider">Go Home</a>
            </div>
            <Footer />
        </div>
    );
};

export default NotFoundPage;
