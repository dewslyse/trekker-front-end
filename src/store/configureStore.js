import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import destinationReducer from './reducers/destinationReducer';
import reservationReducer from './reducers/reservationReducer';
import uiReducer from './reducers/uiReducers';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    destinations: destinationReducer,
    reservations: reservationReducer,
    user: userReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
