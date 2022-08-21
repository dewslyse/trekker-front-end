import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
// import Login from '../components/Login';
import Notification from '../components/Notification';
// import { showLogin } from '../store/reducers/uiReducers';
import { logoutUser } from '../store/actions/userActions';
import { logout } from '../store/reducers/userReducer';

const Home = () => {
  const notification = useSelector((state) => state.ui.notification);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(logoutUser());
  };

  return (
    <>
      {notification && (<Notification message={notification.message} />)}
      <div>
        Sidebar
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {!isLoggedIn && (<Link to="/register">Register</Link>)}
        {isLoggedIn && (<button type="button" onClick={handleLogout}>Logout</button>)}
      </div>
      <Outlet />
    </>
  );
};

export default Home;
