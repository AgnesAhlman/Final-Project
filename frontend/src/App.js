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

const reducer = combineReducers({
  cartRed: cartRed.reducer,
  products: products.reducer
});

const store = configureStore({ reducer });

// Stores the data even though the page is refreshed
store.subscribe(() =>
  localStorage.setItem('cart', JSON.stringify(store.getState().products.items))
);

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/PosterPage" element={<AllPosterPage />} />
          <Route path="/" element={<StartPage />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
