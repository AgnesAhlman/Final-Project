import { createSlice } from '@reduxjs/toolkit';
import * as api from '../utils/api';

const initialItems = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const cart = createSlice({
  name: 'cart',
  initialState: {
    error: null,
    items: initialItems
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
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

export const getCart = () => {
  return async (dispatch) => {
    console.log('getting cart...');
    const data = await api.fetchCart();

    if (data.success) {
      dispatch(cart.actions.setError(null));
      dispatch(cart.actions.setItems(data.response));
    } else {
      console.log(data);
      dispatch(cart.actions.setError(data));
      dispatch(cart.actions.setItems([]));
    }
  };
};

export const createCart = () => {
  return async (dispatch) => {
    const data = await api.createCart();

    if (data.success) {
      dispatch(cart.actions.setError(null));
      dispatch(cart.actions.setItems(data.response));
    } else {
      dispatch(cart.actions.setUser(null));
      dispatch(cart.actions.setItems([]));
      console.log(data.response);
    }
  };
};

export const updateCart = () => {
  return async (dispatch) => {
    const data = await api.updateCart();

    if (data.success) {
      dispatch(cart.actions.setError(null));
      dispatch(cart.actions.setItems(data.response));
    } else {
      dispatch(cart.actions.setUser(null));
      dispatch(cart.actions.setItems([]));
      console.log(data.response);
    }
  };
};

export default cart;
