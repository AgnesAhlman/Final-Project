import { createSlice } from '@reduxjs/toolkit';
import { fetchPosters } from '../utils/api';

// const productData = [
//   {
//     posterID: 1,
//     group: 1,
//     title: 'test1',
//     color: 'green',
//     description: 'test',
//     img: 'url..',
//     price: 300,
//     size: 'small'
//   },
//   {
//     posterID: 2,
//     group: 1,
//     title: 'test2',
//     color: 'green',
//     description: 'test',
//     img: 'url..',
//     price: 500,
//     size: 'small'
//   }
// ];

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

export default products;
