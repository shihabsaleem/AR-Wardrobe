import React, { useState } from "react";
import "./Style/cart.scss";
import { item } from "../data";

const CartItem = () => {
  const [items, setItems] = useState([]);

  const addItem = (product, quantity) => {
    setItems([...items, { ...product, quantity }]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  let products = item;
  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  const product = products.find(
    (product) => product.id === parseInt(localStorage.getItem('idsel'))
  ); // select product with ID of 1
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        <div className="cart-items">
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
        </div>
        <div className="cart-controls">
          <h3>Available items:</h3>
          <ul>
              <li key={product.id}>
                <img src={product.image} alt={product.title} />
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                </div>
                <div className="controls">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <button onClick={() => addItem(product)}>Add to cart</button>
                </div>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
  
};

export default CartItem;
