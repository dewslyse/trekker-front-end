/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notification: {
    message: '',
    isError: false,
    isOpen: false,
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
      state.notification.isOpen = false;
    },
  },
});

const { actions, reducer } = uiSlice;

export const { showNotification, hideNotification } = actions;
export default reducer;
