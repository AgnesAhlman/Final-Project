import { createSlice } from '@reduxjs/toolkit';

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
  }
];

export const products = createSlice({
  name: 'products',
  initialState: productData
});
