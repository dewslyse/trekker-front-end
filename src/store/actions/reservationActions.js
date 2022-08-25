import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/apiRequests';
import { hideNotification, showNotification } from '../reducers/uiReducers';

const fetchReservations = createAsyncThunk(
  'reservation/fetch',
  async (thunkAPI) => {
    try {
      const response = await api.get('/destinations/:id/reservations', { withCredentials: true });
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(showNotification({ message: error.message, isError: true, isOpen: true }));
      setTimeout(() => thunkAPI.dispatch(hideNotification()), 3000);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const addReservation = createAsyncThunk(
  'reservation/add',
  async ({ id, startDate, endDate }, thunkAPI) => {
    const data = { start_date: startDate, end_date: endDate, id };
    try {
      const response = await api.post(`/destinations/${id}/reservations`, data, { withCredentials: true });
      thunkAPI.dispatch(showNotification({ message: 'Reservation added successfully', isError: false, isOpen: true }));
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(showNotification({ message: error.message, isError: true }));
      setTimeout(() => thunkAPI.dispatch(hideNotification()), 3000);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const removeReservation = createAsyncThunk(
  'reservation/remove',
  async (id, thunkAPI) => {
    try {
      await api.delete(`/destinations/:id/reservations/${id}`, { withCredentials: true });
      thunkAPI.dispatch(showNotification({ message: 'Reservation removed successfully', isError: false, isOpen: true }));
      return id;
    } catch (error) {
      thunkAPI.dispatch(showNotification({ message: error.message, isError: true }));
      setTimeout(() => thunkAPI.dispatch(hideNotification()), 3000);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export { fetchReservations, addReservation, removeReservation };
