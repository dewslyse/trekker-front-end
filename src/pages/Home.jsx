import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Notification from '../components/Notification';
import { hideNotification } from '../store/reducers/uiReducers';

const Home = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const destinations = useSelector((state) => state.destinations);

  useEffect(() => {
    if (destinations.length) {
      dispatch(hideNotification());
    }
  }, [notification]);

  return (
    <>
      {notification && (
      <Notification
        title={notification.title}
        message={notification.message}
      />
      )}
      <div>Sidebar</div>
      <Outlet />
    </>
  );
};

export default Home;
