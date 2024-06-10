import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const cart = useSelector((state) => state.cart.products);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="total">
      <h3>Total Quantity: {totalQuantity}</h3>
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Total;
