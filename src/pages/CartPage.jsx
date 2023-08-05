import React from "react";
import Navbar from "../components/common/Navbar";
import CartItem from "../components/features/Cart/CartItem";
import Footer from "../components/common/Footer";

const CartPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Navbar />
            <CartItem />
            <Footer />
        </div>
    );
};

export default CartPage;
