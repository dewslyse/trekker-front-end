import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logoutUser } from '../store/actions/userActions';
import { logout } from '../store/reducers/userReducer';
import trekkerlogo from '../images/trekkerlogo.png';

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
    <div className="sidebar">
      <img src={trekkerlogo} alt="logo" className="logo" />

      <div className="sidebar_content">
        <h5 className="page_link"><a href="/Destinations" className="link"> DESTINATIONS </a></h5>
        <h5 className="page_link"><a href="/Destinations" className="link"> RESERVE </a></h5>
        <h5 className="page_link"><a href="/Destinations" className="link"> MY RESERVATIONS </a></h5>
        <h5 className="page_link"><a href="/Destinations" className="link"> ADD DESTINATION </a></h5>
        <h5 className="page_link"><a href="/Destinations" className="link"> DEL_DESTINATION</a></h5>
      </div>

      <div className="links">
        {!isLoggedIn && (<button type="button" className="li"><Link to="/login" className="enter">Login</Link></button>)}
        <br />
        {!isLoggedIn && (<button type="button" className="li"><Link to="/register" className="enter">Register</Link></button>)}
        <br />
        {isLoggedIn && (<button type="button" className="enter" onClick={handleLogout}>Logout</button>)}
      </div>
    </div>
  );
};

export default Sidebar;
