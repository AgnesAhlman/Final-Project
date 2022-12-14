import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { configureStore, combineReducers } from 'reduxjs/toolkit';
import { Provider } from 'react-redux';
import AllPostersPage from './components/pages/AllPostersPage';
import StartPage from './components/pages/StartPage';
import Cart from './components/cart/Cart';

import { cartRed } from './components/reducers/cartRed';
import { products } from './components/reducers/products';

const reducer = combineReducers({
  cartRed: cartRed.reducer,
  products: products.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/PosterPage" element={<AllPostersPage />} />
          <Route path="/" element={<StartPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
