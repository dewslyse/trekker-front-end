import api from '../../api/apiRequests';
import { addDestination, createDestinations, removeDestination } from '../reducers/destinationReducer';
import { showNotification } from '../reducers/uiReducers';

const fetchDestinations = () => async (dispatch) => {
  await api
    .get('/destinations')
    .then((res) => dispatch(createDestinations(res.data)))
    .catch((err) => dispatch(showNotification({
      message: err.message,
      isError: true,
    })));
};

const addNewDestination = (destination) => async (dispatch) => {
  await api
    .post('/destinations', destination, { withCredentials: true })
    .then((res) => dispatch(addDestination(res.data)))
    .catch((err) => dispatch(showNotification({
      message: err.message,
      isError: true,
    })));
};

const deleteDestination = (id) => async (dispatch) => {
  await api
    .delete(`/destinations/${id}`, { withCredentials: true })
    .then(() => dispatch(removeDestination(id)))
    .catch((err) => dispatch(showNotification({
      message: err.message,
      isError: true,
    })));
};

export { fetchDestinations, addNewDestination, deleteDestination };
