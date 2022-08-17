import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import React from 'react';

const RequireAuth = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const location = useLocation();
  return (
    isLoggedIn ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
