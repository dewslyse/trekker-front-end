/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
  },
});

const { actions, reducer } = uiSlice;

export const { showNotification, hideNotification } = actions;
export default reducer;
