import api from '../../api/apiRequests';
import { createReservations, addReservation, removeReservation } from '../reducers/reservationReducer';
import { hideNotification, showNotification } from '../reducers/uiReducers';

const fetchReservations = () => async (dispatch) => {
  try {
    const response = await api.get('/destinations/:id/reservations');
    dispatch(createReservations(response.data));
    dispatch(hideNotification());
  } catch (error) {
    dispatch(showNotification({
      status: 'error',
      title: 'Error!',
      message: error.message,
    }));
    setInterval(() => {
      dispatch(hideNotification());
    }, 3000);
  }
};

const addNewReservation = (reservation, id) => async (dispatch) => {
  try {
    const response = await api.post(`/destinations/${id}/reservations`, reservation, { withCredentials: true });
    dispatch(addReservation(response.data));
    dispatch(hideNotification());
  } catch (error) {
    dispatch(showNotification({
      status: 'error',
      title: 'Error!',
      message: error.message,
    }));
    setInterval(() => {
      dispatch(hideNotification());
    }, 3000);
  }
};

const deleteReservation = (id) => async (dispatch) => {
  try {
    await api.delete(`destinations/:id/reservations/${id}`, { withCredentials: true });
    dispatch(removeReservation(id));
    dispatch(hideNotification());
  } catch (error) {
    dispatch(showNotification({
      status: 'error',
      title: 'Error!',
      message: error.message,
    }));
    setInterval(() => {
      dispatch(hideNotification());
    }, 3000);
  }
};

export { fetchReservations, addNewReservation, deleteReservation };
