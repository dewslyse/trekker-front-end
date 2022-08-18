/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    signup: (state, { payload }) => ({
      isLoggedIn: payload.logged_in,
      user: payload.user,
    }),
    login: (state, { payload }) => ({
      isLoggedIn: payload.logged_in,
      user: payload.user,
    }),
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
});

const { actions, reducer } = userSlice;

export const { signup, login, logout } = actions;
export default reducer;
