import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/apiRequests';
import { showNotification } from '../reducers/uiReducers';

const addDestination = createAsyncThunk(
  'destination/add',
  async (destination, thunkAPI) => {
    try {
      const response = await api.post('/destinations', destination, { withCredentials: true });
      thunkAPI.dispatch(showNotification({ message: 'Destination added successfully', isError: false }));
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(showNotification({ message: error.message, isError: true }));
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const removeDestination = createAsyncThunk(
  'destination/remove',
  async (id, thunkAPI) => {
    try {
      await api.delete(`/destinations/${id}`, { withCredentials: true });
      thunkAPI.dispatch(showNotification({ message: 'Destination removed successfully', isError: false }));
      return id;
    } catch (error) {
      thunkAPI.dispatch(showNotification({ message: error.message, isError: true }));
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const fetchDestinations = createAsyncThunk(
  'destination/fetch',
  async (thunkAPI) => {
    try {
      const response = await api.get('destinations', { withCredentials: true });
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(showNotification({ message: error.message, isError: true }));
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export { fetchDestinations, addDestination, removeDestination };
