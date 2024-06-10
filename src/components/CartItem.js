import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../features/cart/cartSlice';
import './Cart.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  if (!item.price) {
    item.price = 0; // or handle this case appropriately
  }

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>{item.brand}</p>
        <p>{item.description}</p>
        <p className="price">${item.price.toFixed(2)}</p>
        <div className="cart-item-controls">
          <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
