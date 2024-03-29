/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import user from 'reducers/user';
import Register from './components/pages/Register';
import AllPosterPage from './components/pages/AllPostersPage';
import StartPage from './components/pages/StartPage';

import cart from './reducers/cart';
import products from './reducers/products';
import CheckoutPage from './components/pages/CheckoutPage';
import SinglePosterPage from './components/pages/SinglePosterPage';
import LogIn from './components/pages/LogIn';

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer,
  user: user.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/posters" element={<AllPosterPage />} />
          <Route path="/posters/:id" element={<SinglePosterPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="login" element={<LogIn />} />
          <Route path="Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
