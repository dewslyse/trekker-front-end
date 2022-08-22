import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Notification from '../components/Notification';
import Sidebar from '../components/Sidebar';
import { logoutUser } from '../store/actions/userActions';
import { logout } from '../store/reducers/userReducer';

const Home = () => {
  const notification = useSelector((state) => state.ui.notification);
  const isLoggedIn = localStorage.getItem('LOGGED_IN');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('LOGGED_IN');
    navigate('/');
    dispatch(logout());
    dispatch(logoutUser());
  };

  return (
    <>
      {notification && (<Notification message={notification.message} />)}
      <div>
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {!isLoggedIn && (<Link to="/register">Register</Link>)}
        {isLoggedIn && (<button type="button" onClick={handleLogout}>Logout</button>)}
        {isLoggedIn && (<Sidebar />)}
      </div>
      <Outlet />
    </>
  );
};

export default Home;
