import api from '../../api/apiRequests';
import { createReservations, addReservation, removeReservation } from '../reducers/reservationReducer';
import { showNotification } from '../reducers/uiReducers';

const fetchReservations = () => async (dispatch) => {
  await api
    .get('/destinations/:id/reservations')
    .then((res) => dispatch(createReservations(res.data)))
    .catch((err) => dispatch(showNotification({
      message: err.message,
      isError: true,
    })));
};

const addNewReservation = (reservation, id) => async (dispatch) => {
  await api
    .post(`/destinations/${id}/reservations`, reservation, { withCredentials: true })
    .then((res) => dispatch(addReservation(res.data)))
    .catch((err) => dispatch(showNotification({
      message: err.message,
      isError: true,
    })));
};

const deleteReservation = (id) => async (dispatch) => {
  await api
    .delete(`destinations/:id/reservations/${id}`, { withCredentials: true })
    .then(() => dispatch(removeReservation(id)))
    .catch((err) => dispatch(showNotification({
      message: err.message,
      isError: true,
    })));
};

export { fetchReservations, addNewReservation, deleteReservation };
