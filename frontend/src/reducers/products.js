import { createSlice } from '@reduxjs/toolkit';
import { fetchPosters, fetchPostersById } from '../utils/api';

const products = createSlice({
  name: 'products',
  initialState: {
    items: [],
    error: null,
    loading: false
  },
  reducers: {
    setItems: (store, action) => {
      store.items = action.payload;
    },
    setSingleItem: (store, action) => {
      const existingIdIndex = store.items.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingIdIndex > -1) {
        store.items[existingIdIndex] = action.payload;
      } else {
        store.items.push(action.payload);
      }
    }
  }
});

export const getPosters = () => {
  return (dispatch) => {
    fetchPosters().then((data) => {
      dispatch(products.actions.setItems(data));
    });
  };
};

export const getSinglePosters = (id) => {
  return (dispatch) => {
    fetchPostersById(id).then((data) => {
      dispatch(products.actions.setSingleItem(data));
    });
  };
};

export default products;
