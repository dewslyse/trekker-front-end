/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSelected: false,
  login: false,
  signup: false,
  notification: {
    message: '',
    isError: false,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showNotification: (state, { payload }) => {
      state.notification = payload;
    },
    hideNotification: (state) => {
      state.notification = initialState.notification;
    },
    showLogin: (state) => {
      state.login = true;
    },
    hideLogin: (state) => {
      state.login = false;
    },
    showSignup: (state) => {
      state.signup = false;
    },
    hideSignup: (state) => {
      state.signup = false;
    },
  },
});

const { actions, reducer } = uiSlice;

export const {
  showNotification, hideNotification, showLogin, showSignup, hideLogin, hideSignup,
} = actions;
export default reducer;
