import React, { useState } from "react";
import "./Style/cart.scss";

function CartItem() {
  // Define state for cart items and total cost
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  // Function to add item to cart
  const addToCart = (item) => {
    // Check if item is already in cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If item already exists in cart, increase quantity
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      // If item does not exist in cart, add to cart with quantity of 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    // Update total cost
    setTotalCost(totalCost + item.price);
  };

  // Function to remove item from cart
  const removeFromCart = (item) => {
    // Filter out the item to remove from cart
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);

    // Update total cost
    setTotalCost(totalCost - item.price * item.quantity);
  };

  return (
    <div className="cart-item">
      <h2>Product Cart</h2>
      <p>Total Cost: {totalCost}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} ({item.quantity}) - ${item.price * item.quantity}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => addToCart({ id: 1, name: "Product 1", price: 10 })}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default CartItem;
