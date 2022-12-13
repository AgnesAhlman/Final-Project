import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import AllPostersPage from './components/AllPostersPage';
import StartPage from './components/StartPage';
// import { Provider } from 'react-redux';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';

// const reducer = combineReducers({
//   user: user.reducer,
//   thoughts: thoughts.reducer
// });
// const store = configureStore({reducer});
export const App = () => {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/PosterPage" element={<AllPostersPage />} />
        <Route path="/" element={<StartPage />} />
        {/* <Route path="/" element={<Header />} /> */}
      </Routes>
    </BrowserRouter>
    // </Provider>
  );
};
