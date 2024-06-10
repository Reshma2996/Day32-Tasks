import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import Total from './Total';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart.products);

  if (!Array.isArray(cart)) {
    return <p>Loading...</p>;
  }

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} /> // Ensure key is unique
      ))}
      <Total />
    </div>
  );
};

export default Cart;
