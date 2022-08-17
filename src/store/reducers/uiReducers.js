import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { visiblity: false, notification: null },
  reducers: {
    showNotification: (state, { payload }) => (
      {
        visiblity: state.visibility,
        notification: {
          status: payload.status,
          title: payload.title,
          message: payload.message,
        },
      }
    ),
    hideNotification: (state) => (
      { visiblity: state.visibility, notification: null }
    ),
  },
});

const { actions, reducer } = uiSlice;

export const { showNotification, hideNotification } = actions;
export default reducer;
