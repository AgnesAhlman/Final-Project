import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/api';

const user = createSlice({
  name: 'user',
  initialState: {
    error: null,
    user: null
  },
  reducers: {
    setError: (store, action) => {
      store.error = action.payload;
    },
    setUser: (store, action) => {
      store.user = action.payload;
    }
  }
});

export const logIn = (mode, username, password) => {
  return async (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    };
    const response = await fetch(API_URL(mode), options);
    const data = await response.json();

    if (data.success) {
      dispatch(user.actions.setError(null));
      dispatch(user.actions.setUser(data.response));
    } else {
      dispatch(user.actions.setUser(null));
      dispatch(user.actions.setError(data.response));
      console.log(data.response);
    }
  };
};

export default user;
