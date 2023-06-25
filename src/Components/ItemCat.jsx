import React from "react";
import "./Style/categories.scss";

const ItemCat = ({ item }) => {
  const handleClick = ()=>{
    localStorage.setItem('id',item.id);
    window.location.href = '/pro';
  }
  return (
    <div className="product-container">
      <div className="product-card" onClick={handleClick}>
        <img src={item.image} alt={item.title} className="card-img" />
        <div className="product-det">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <span>&#8377;{item.price}</span>
          <button>Show</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCat;
