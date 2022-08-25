import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { checkLoginStatus } from '../store/actions/userActions';
import { hideNotification, showNotification } from '../store/reducers/uiReducers';
import { login } from '../store/reducers/userReducer';

const RequireAuth = () => {
  const isLoggedIn = localStorage.getItem('LOGGED_IN');
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedIn = localStorage.getItem('LOGGED_IN');
    if (loggedIn) dispatch(login());
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, [dispatch]);

  if (!isLoggedIn) {
    dispatch(showNotification({ message: 'Please sign in first', isError: true }));
    setTimeout(() => dispatch(hideNotification()), 2000);
  }

  return (
    isLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
