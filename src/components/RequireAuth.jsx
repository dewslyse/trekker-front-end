import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const isLoggedIn = localStorage.getItem('LOGGED_IN');
  const location = useLocation();
  return (
    isLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
