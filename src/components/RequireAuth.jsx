import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import React from 'react';

const RequireAuth = () => {
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  isLoggedIn = true;
  const location = useLocation();
  return (
    isLoggedIn ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
