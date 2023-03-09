import React from "react";
import "./Style/categories.scss";

const ItemCat = ({ item }) => {
  return (
    <div className="product-container">
      <div className="product-card">
        <img src={item.image} alt={item.title} className="card-img" />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <span>{item.price}</span>
        <button>Show</button>
      </div>
    </div>
  );
};

export default ItemCat;
