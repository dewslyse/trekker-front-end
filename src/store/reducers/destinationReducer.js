import { createSlice } from '@reduxjs/toolkit';

const destinationSlice = createSlice({
  name: 'destination',
  initialState: [],
  reducers: {
    createDestinations: (state, { payload }) => payload,

    addDestination: (state, { payload }) => {
      state.push(payload);
    },
    removeDestination: (state, { payload }) => {
      state.filter((destination) => destination.id !== payload);
    },
  },
});

const { actions, reducer } = destinationSlice;

export const { createDestinations, addDestination, removeDestination } = actions;
export default reducer;
