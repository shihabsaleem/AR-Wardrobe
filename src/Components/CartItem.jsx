import React, { useState } from "react";
import "./Style/cart.scss";
import { item } from "../data";

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
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button onClick={() => removeItem(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: {calculateTotal()}</h3>
      <h3>Available items:</h3>
      <ul>
        {item.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button onClick={() => addItem(product)}>Add to cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItem;
