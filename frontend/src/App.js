import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Route></Route>
        </Routes>
      </BrowserRouter>
    // </Provider>
      
  );
}
