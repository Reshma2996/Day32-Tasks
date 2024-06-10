import { createSlice } from '@reduxjs/toolkit';
import cartData from './cartData.json';

const initialState = {
  products: cartData // Ensure cartData is an array of product objects
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state.products.find(product => product.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find(product => product.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    }
  }
});

export const { incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
