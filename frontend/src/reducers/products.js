import { createSlice } from '@reduxjs/toolkit';
import { fetchPosters, fetchPostersById } from '../utils/api';

const products = createSlice({
  name: 'products',
  initialState: {
    items: [],
    error: null,
    isLoading: false
  },
  reducers: {
    setItems: (store, action) => {
      store.items = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    setIsLoading: (store, action) => {
      store.isLoading = action.payload;
    },
    setSingleItem: (store, action) => {
      const existingIdIndex = store.items.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingIdIndex > -1) {
        store.items[existingIdIndex] = action.payload;
      } else if (action.payload) {
        store.items.push(action.payload);
      }
    }
  }
});

export const getPosters = () => {
  return async (dispatch) => {
    dispatch(products.actions.setIsLoading(true));
    const data = await fetchPosters();
    dispatch(products.actions.setIsLoading(false));

    if (data.success) {
      dispatch(products.actions.setItems(data.response));
    } else {
      dispatch(products.actions.setError(data.message));
    }
  };
};

export const getSinglePosters = (id) => {
  return async (dispatch) => {
    const data = await fetchPostersById(id);

    if (data.success) {
      dispatch(products.actions.setSingleItem(data.response));
    } else {
      dispatch(products.actions.setError(data.message));
    }
  };
};

export default products;
