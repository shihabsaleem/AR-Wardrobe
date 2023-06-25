import React from "react";
import { products } from "../data";
import { Link } from "react-router-dom";
import "./Style/single.scss";

const SingleItem = () => {
  const category = parseInt(localStorage.getItem("category")); // Assuming you store the selected category in localStorage

  // Filter products based on the selected category
  const filteredProducts = products.filter(
    (product) => parseInt(product.cat) === category
  );

  return (
    <div className="single-item">
      {filteredProducts.map((product) => (
        <Link
          to={`/pro`}
          onClick={() => localStorage.setItem("id", product.id)}
        >
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SingleItem;
