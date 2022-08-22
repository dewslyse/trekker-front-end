/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser, registerUser, checkLoginStatus,
} from '../actions/userActions';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = payload.logged_in;
      state.user = payload.user;
    },
    [registerUser.rejected]: (state) => {
      state.isLoggedIn = false;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = payload.logged_in;
      state.user = payload.user;
    },
    [loginUser.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [checkLoginStatus.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = payload.logged_in;
      state.user = payload.user;
    },
  },
});

const { reducer, actions } = userSlice;
export const { logout, login } = actions;

export default reducer;
