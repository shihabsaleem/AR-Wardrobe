import React, { useState } from "react";
import products from "../data";
import "../Components/Style/productdetails.scss";

function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("S"); // default size

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleTryNow = () => {
    // handle the "Try Now" button click
    console.log("Trying product...");
  };

  const selectedProduct = products.find((product) => product.id === 1); // select product with ID of 1

  return (
    <div>
      <div className="product-item">
        <div key={selectedProduct.id}>
          <img src={selectedProduct.image} alt={selectedProduct.name} />
        </div>

        <div className="discription">
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.longdesc}</p>
          <p className="price">Price: ${selectedProduct.price}</p>
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

      </div>
    </div>
  );
}

export default ProductDetails;
