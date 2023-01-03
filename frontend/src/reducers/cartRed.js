import { createSlice } from '@reduxjs/toolkit';

const initialItems = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const cartRed = createSlice({
  name: 'cart',
  initialState: {
    items: initialItems
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action);
      const existingProduct = state.items.find(
        (items) => items.posterID === action.payload.posterID
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const existingProduct = state.items.find(
        (items) => items.posterID === action.payload.posterID
      );

      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.posterID !== action.payload.posterID
        );
      } else if (existingProduct) {
        existingProduct.quantity -= 1;
      }
    }
  }
});

export default cartRed;
