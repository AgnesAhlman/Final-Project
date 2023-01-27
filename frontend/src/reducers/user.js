import { createSlice } from '@reduxjs/toolkit';
import { login, setAccessToken } from 'utils/api';
import { getCart } from './cart';

const user = createSlice({
  name: 'user',
  initialState: {
    error: null,
    user: null,
    isLoggedIn: false
  },
  reducers: {
    setError: (store, action) => {
      store.error = action.payload;
    },
    setUser: (store, action) => {
      store.user = action.payload;
      store.isLoggedIn = !!action.payload;
    }
  }
});

export const logIn = (mode, email, password) => {
  return async (dispatch) => {
    const data = await login(mode, email, password);

    if (data.success) {
      dispatch(user.actions.setError(null));
      dispatch(user.actions.setUser(data.response));
      setAccessToken(data.response.accessToken);
      dispatch(getCart());
    } else {
      dispatch(user.actions.setUser(null));
      dispatch(user.actions.setError(data.message));
    }
  };
};

export default user;
