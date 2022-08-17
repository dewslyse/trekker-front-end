import api from '../../api/apiRequests';
import { addDestination, createDestinations, removeDestination } from '../reducers/destinationReducer';
import { hideNotification, showNotification } from '../reducers/uiReducers';

const fetchDestinations = () => async (dispatch) => {
  try {
    const response = await api.get('/destinations');
    dispatch(createDestinations(response.data));
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

const addNewDestination = (destination) => async (dispatch) => {
  try {
    const response = await api.post('/destinations', destination, { withCredentials: true });
    dispatch(addDestination(response.data));
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

const deleteDestination = (id) => async (dispatch) => {
  try {
    await api.delete(`/destinations/${id}`, { withCredentials: true });
    dispatch(removeDestination(id));
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

export { fetchDestinations, addNewDestination, deleteDestination };
