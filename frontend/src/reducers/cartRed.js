import { createSlice } from '@reduxjs/toolkit';

const cartRed = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
    }
  }
});

export default cartRed;
