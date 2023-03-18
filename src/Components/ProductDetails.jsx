import React, { useState } from "react";
import products from "../data";
import "../Components/Style/productdetails.scss"

const ProductDetails = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("S"); // default size

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleTryNow = () => {
    // handle the "Try Now" button click
    console.log("Trying product...");
  };

  return (
    <div>
      <div className="single-item">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p className="price">Price: ${product.price}</p>
            <label htmlFor="size">Size:</label>
            <select id="size" value={selectedSize} onChange={handleSizeChange}>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <button onClick={handleTryNow}>Try Now</button>
            <button>Add to Cart</button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
