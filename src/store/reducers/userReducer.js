/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    signup: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload;
    },
    login: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
});

const { actions, reducer } = userSlice;

export const { signup, login, logout } = actions;
export default reducer;
