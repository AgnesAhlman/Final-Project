import { createSlice } from '@reduxjs/toolkit';
import * as api from '../utils/api';

// const initialItems = localStorage.getItem('cart')
//   ? JSON.parse(localStorage.getItem('cart'))
//   : [];

const cart = createSlice({
  name: 'cart',
  initialState: {
    error: null,
    isFetching: false,
    userHasCart: false,
    cartId: null,
    items: []
  },
  reducers: {
    setItems: (state, action) => {
      const newItems = action.payload.reduce((acc, item) => {
        const existingProduct = acc.find((i) => i.posterId === item.posterId);
        if (existingProduct) {
          existingProduct.quantity += item.quantity;
          return acc;
        }
        return acc.concat(item);
      }, state.items);

      state.items = newItems;
    },
    setCartId: (state, action) => {
      state.cartId = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUserHasCart: (state, action) => {
      state.userHasCart = action.payload;
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    addItem: (state, action) => {
      const existingProduct = state.items.find(
        (items) => items.posterId === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ posterId: action.payload._id, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find(
        (items) => items.posterId === action.payload._id
      );

      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.posterId !== action.payload._id
        );
      } else if (existingProduct) {
        existingProduct.quantity -= 1;
      }
    }
  }
});

export const syncCart = () => {
  return async (dispatch, getState) => {
    const state = getState();

    if (state.user.isLoggedIn && state.cart.items) {
      if (state.cart.cartId) {
        // Update Cart

        const data = await api.updateCart(state.cart.cartId, state.cart.items);

        if (!data.success) {
          dispatch(cart.actions.setError(data.message));
        }
      } else {
        // Create Cart

        const data = await api.createCart(state.cart.items);

        if (data.success) {
          dispatch(cart.actions.setCartId(data.response._id));
        } else {
          dispatch(cart.actions.setError(data.message));
        }
      }
    }
  };
};

export const getCart = () => {
  return async (dispatch) => {
    dispatch(cart.actions.setIsFetching(true));
    const data = await api.fetchCart();

    if (data.success) {
      dispatch(cart.actions.setError(null));
      dispatch(cart.actions.setItems(data.response.items));
      dispatch(cart.actions.setUserHasCart(true));
      dispatch(cart.actions.setCartId(data.response._id));
      dispatch(syncCart());
    } else {
      dispatch(cart.actions.setError(data.message));
    }

    dispatch(cart.actions.setIsFetching(false));
  };
};

export const addToCart = (product) => {
  return async (dispatch) => {
    dispatch(cart.actions.addItem(product));
    dispatch(syncCart());
  };
};

export const removeFromCart = (product) => {
  return async (dispatch) => {
    dispatch(cart.actions.removeItem(product));
    dispatch(syncCart());
  };
};

export default cart;
