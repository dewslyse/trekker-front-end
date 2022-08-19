import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const location = useLocation();
  return (
    isLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
