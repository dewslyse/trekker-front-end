import { createSlice } from '@reduxjs/toolkit';
import { addReservation, removeReservation, fetchReservations } from '../actions/reservationActions';

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: [],
  reducers: {
    getReservation: (state) => state,
  },
  extraReducers: {
    [addReservation.fulfilled]: (state, { payload }) => {
      state.push(payload);
    },
    [removeReservation.fulfilled]: (state, { payload }) => {
      state.filter((reservation) => reservation.id !== payload);
    },
    [fetchReservations.fulfilled]: (state, { payload }) => payload,
  },
});

const { reducer, actions } = reservationSlice;
export const { getReservation } = actions;
export default reducer;
