import React from "react";
import products from "../data";
import { Link } from "react-router-dom";
import "./Style/single.scss";

const SingleItem = () => {
  return (
    <div className="single-item">
      {products.map((product) => (
        <Link to={`/single/${product.id}`}>
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
