import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Notification from '../components/Notification';
import HomeCarousel from '../components/HomeCarousel';

const Home = () => {
  const notification = useSelector((state) => state.ui.notification);

  return (
    <>
      <Sidebar />
      {notification && (<Notification message={notification.message} />)}
      <HomeCarousel />
      <Outlet />
    </>
  );
};

export default Home;
