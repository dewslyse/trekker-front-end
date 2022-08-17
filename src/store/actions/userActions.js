import api from '../../api/apiRequests';
import { login, signup, logout } from '../reducers/userReducer';
import { hideNotification, showNotification } from '../reducers/uiReducers';

const registerUser = (user) => async (dispatch) => {
  try {
    const response = await api.post('/registrations', user, { withCredentials: true });
    dispatch(signup(response.data));
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

const loginUser = (user) => async (dispatch) => {
  try {
    const response = await api.post('/sessions', user, { withCredentials: true });
    dispatch(login(response.data));
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

const logoutUser = () => async (dispatch) => {
  try {
    await api.delete('/logout', { withCredentials: true });
    dispatch(logout());
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

export { registerUser, loginUser, logoutUser };
