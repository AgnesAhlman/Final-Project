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
        (items) => items._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      // fetch('http://localhost:8080/cartPosters', {
      //   method: 'POST',
      //   body: JSON.stringify(action.payload),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
    },

    removeItem: (state, action) => {
      const existingProduct = state.items.find(
        (items) => items._id === action.payload._id
      );

      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
      } else if (existingProduct) {
        existingProduct.quantity -= 1;
      }
    }
  }
});

export default cartRed;
