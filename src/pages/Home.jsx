import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
// import Login from '../components/Login';
import Notification from '../components/Notification';
// import { showLogin } from '../store/reducers/uiReducers';

const Home = () => {
  const notification = useSelector((state) => state.ui.notification);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      {notification && (<Notification message={notification.message} />)}
      <div>
        Sidebar
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {!isLoggedIn && (<Link to="/register">Register</Link>)}
      </div>
      <Outlet />
    </>
  );
};

export default Home;
