import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Login from '../components/Login';
import Notification from '../components/Notification';
import { showLogin } from '../store/reducers/uiReducers';

const Home = () => {
  const notification = useSelector((state) => state.ui.notification);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const login = useSelector((state) => state.ui.login);
  const dispatch = useDispatch();

  const handleDisplayLogin = () => {
    dispatch(showLogin());
  };

  return (
    <>
      {notification && (<Notification message={notification.message} />)}
      <div>Sidebar</div>
      {!isLoggedIn && (<button type="button" onClick={handleDisplayLogin}>Login</button>)}
      {login && (<Login />)}
      <Outlet />
    </>
  );
};

export default Home;
