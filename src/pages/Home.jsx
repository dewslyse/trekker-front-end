import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Notification from '../components/Notification';

const Home = () => {
  const notification = useSelector((state) => state.ui.notification);

  return (
    <>
      <Sidebar />
      {notification && (<Notification message={notification.message} />)}
      <Outlet />
    </>
  );
};

export default Home;
