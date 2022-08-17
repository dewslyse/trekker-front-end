import { createSlice } from '@reduxjs/toolkit';

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: [],
  reducers: {
    createReservations: (state, { payload }) => payload,

    addReservation: (state, { payload }) => {
      state.push(payload);
    },

    removeReservation: (state, { payload }) => {
      state.filter((reservation) => reservation.id !== payload);
    },
  },
});

const { actions, reducer } = reservationSlice;

export const { createReservations, addReservation, removeReservation } = actions;

export default reducer;
