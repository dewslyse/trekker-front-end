import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logoutUser } from '../store/actions/userActions';
import { logout } from '../store/reducers/userReducer';

const Sidebar = () => {
  const isLoggedIn = localStorage.getItem('LOGGED_IN');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    localStorage.removeItem('LOGGED_IN');
    dispatch(logout());
    dispatch(logoutUser());
  };

  return (
    <div>
      Sidebar
      {!isLoggedIn && <Link to="/login">Login</Link>}
      {!isLoggedIn && (<Link to="/register">Register</Link>)}
      {isLoggedIn && (<button type="button" onClick={handleLogout}>Logout</button>)}
    </div>
  );
};

export default Sidebar;
