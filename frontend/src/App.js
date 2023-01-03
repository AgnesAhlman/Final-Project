/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import AllPosterPage from './components/pages/AllPostersPage';
import StartPage from './components/pages/StartPage';

import cartRed from './reducers/cartRed';
import products from './reducers/products';
import CheckoutPage from './components/pages/CheckoutPage';
import SinglePosterPage from './components/pages/SinglePosterPage';

const reducer = combineReducers({
  cartRed: cartRed.reducer,
  products: products.reducer
});

const store = configureStore({ reducer });

// Stores the data even though the page is refreshed
store.subscribe(() =>
  localStorage.setItem('cart', JSON.stringify(store.getState().cartRed.items))
);

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/posters" element={<AllPosterPage />} />
          <Route path="/posters/:id" element={<SinglePosterPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
