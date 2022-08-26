import { createSlice } from '@reduxjs/toolkit';
import { addDestination, removeDestination, fetchDestinations } from '../actions/destinationActions';

const destinationSlice = createSlice({
  name: 'destination',
  initialState: [],
  extraReducers: {
    [addDestination.fulfilled]: (state, { payload }) => {
      state.push(payload);
    },
    [removeDestination.fulfilled]: (state, { payload }) => {
      state.filter((destination) => destination.id !== payload);
    },
    [fetchDestinations.fulfilled]: (state, { payload }) => payload,
  },
});

const { reducer } = destinationSlice;

export default reducer;
