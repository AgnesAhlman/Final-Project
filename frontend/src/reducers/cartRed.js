import { createSlice } from '@reduxjs/toolkit';

const cartRed = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action);
      const exsistingProduct = state.items.find(
        (items) => items.posterID === action.payload.posterID
      );
      if (exsistingProduct) {
        exsistingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const exsistingProduct = state.items.find(
        (items) => items.posterID === action.payload.posterID
      );

      if (exsistingProduct && exsistingProduct.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.posterID !== action.payload.posterID
        );
      } else if (exsistingProduct) {
        exsistingProduct.quantity -= 1;
      }
    }
  }
});

export default cartRed;
