import { createSlice } from '@reduxjs/toolkit';
import { addReservation, removeReservation, fetchReservations } from '../actions/reservationActions';

const reservationSlice = createSlice({
  name: 'reservation',
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

const { reducer } = reservationSlice;

export default reducer;
