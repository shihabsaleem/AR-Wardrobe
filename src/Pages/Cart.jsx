import React from "react";
import Announce from "../Components/Announce";
import CartItem from "../Components/CartItem";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Cart = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <CartItem />
      <Footer />
    </div>
  );
};

export default Cart;
