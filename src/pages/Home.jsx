import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Notification from '../components/Notification';

const Home = () => {
  const notification = useSelector((state) => state.ui.notification);

  return (
    <>
      <Navigation />
      {notification && (<Notification message={notification.message} />)}
      <Outlet />
    </>
  );
};

export default Home;
