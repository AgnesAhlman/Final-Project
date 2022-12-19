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
    }
  }
});

export default cartRed;
