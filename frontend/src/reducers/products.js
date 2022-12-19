import { createSlice } from '@reduxjs/toolkit';
// import { fetchPosters } from '../utils/api';

const productData = [
  {
    posterID: 1,
    group: 1,
    title: 'test1',
    color: 'green',
    description: 'test',
    img: 'url..',
    price: 300,
    size: 'small'
  },
  {
    posterID: 2,
    group: 1,
    title: 'test2',
    color: 'green',
    description: 'test',
    img: 'url..',
    price: 500,
    size: 'small'
  }
];

const products = createSlice({
  name: 'products',
  initialState: {
    items: productData,
    error: null,
    loading: false
  }
});

// export const getPosters = () => {
//   return async (dispatch, getState) => {
//     dispatch(products.actions.setLoading(true));
//     const posters = await fetchPosters();
//     dispatch(products.actions.setLoading(false));
//     setPosters;
//   };
// };

export default products;
