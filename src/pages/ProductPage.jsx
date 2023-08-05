import React from "react";
import Navbar from "../components/common/Navbar";
import ProductDetails from "../components/features/Product/ProductDetails";
import Footer from "../components/common/Footer";
// import "../styles/productdetails.scss";

const ProductPage = () => {
    return (
        <div>
            <Navbar />
            <ProductDetails />
            <Footer />
        </div>
    );
};

export default ProductPage;
