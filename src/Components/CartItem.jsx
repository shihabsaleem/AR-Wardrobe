import React, { useState } from "react";
import "./Style/cart.scss";

const CartItem = () => {
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems([...items, product]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price.toFixed(2)}</p>
                <button onClick={() => removeItem(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${calculateTotal().toFixed(2)}</h3>
    </div>
  );
};

export default CartItem;
