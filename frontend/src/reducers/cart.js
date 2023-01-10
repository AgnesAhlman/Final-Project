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
      console.log(action);
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

export const getCart = () => {
  return async (dispatch) => {
    console.log('getting cart...');
    dispatch(cart.actions.setIsFetching(true));
    const data = await api.fetchCart();
    console.log(data);

    if (data.success) {
      dispatch(cart.actions.setError(null));
      dispatch(cart.actions.setItems(data.response.items));
      dispatch(cart.actions.setUserHasCart(true));
    } else {
      console.log(data);
      dispatch(cart.actions.setError(data));
    }

    dispatch(cart.actions.setIsFetching(false));
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

export const update = (payload) => {
  return async (dispatch, getState) => {
    const { isLoggedIn } = getState().user;
    dispatch(cart.actions.addItem(payload));
    if (isLoggedIn) {
      // update db cart here
    }
  };
};
export default cart;
