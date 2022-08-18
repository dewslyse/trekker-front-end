import api from '../../api/apiRequests';
import { login, signup, logout } from '../reducers/userReducer';
import { showNotification } from '../reducers/uiReducers';

const registerUser = (user) => async (dispatch) => {
  dispatch(showNotification({
    message: 'Loading...',
    isError: false,
  }));
  await api
    .post('/registrations', user, { withCredentials: true })
    .then((res) => dispatch(signup(res.data)))
    .catch((err) => dispatch(showNotification({
      message: err.message,
      isError: true,
    })));
};

const loginUser = (user) => async (dispatch) => {
  dispatch(showNotification({
    message: 'Loading...',
    isError: false,
  }));
  await api
    .post('/sessions', user, { withCredentials: true })
    .then((res) => dispatch(login(res.data)))
    .catch(() => dispatch(showNotification({
      message: 'Invalid email or password',
      isError: true,
    })));
};

const logoutUser = () => async (dispatch) => {
  await api
    .delete('/logout', { withCredentials: true })
    .then(() => dispatch(logout()))
    .catch((err) => dispatch(showNotification({
      message: err.message,
      isError: true,
    })));
};

export { registerUser, loginUser, logoutUser };
