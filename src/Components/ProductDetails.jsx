import React, { useState } from "react";
import { item } from "../data";
import "../Components/Style/productdetails.scss";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("S"); // default size
  const current = localStorage.getItem("id");
  const navigate = useNavigate();
  const products = item;

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  // const handleTryNow = () => {
  //   navigate("/pro/watch");
  //   console.log("Trying product...");
  // };

  const selectedProduct = products.find(
    (product) => product.id === parseInt(current)
  ); // select product with ID of 1

  const handleTryNow = () => {
    switch (current) {
      case "1":
        window.open("./examples/specs1.html", "_blank");
        break;
      case "2":
        window.open("./examples/specs2.html", "_blank");
        break;
      case "3":
        window.open("./examples/ring.html", "_blank");
        break;
      case "4":
        window.open("./examples/ear.html", "_blank");
        break;
      case "5":
        window.open("./examples/shirt.html", "_blank");
        break;
      default:
        window.open("./", "_blank");
        break;
    }
  };

  return (
    <div>
      <div className="product-item">
        <div key={selectedProduct.id}>
          <img src={selectedProduct.image} alt={selectedProduct.name} />
        </div>

        <div className="description">
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.long4desc}</p>
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
