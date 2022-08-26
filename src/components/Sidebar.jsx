import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { MdPlace } from 'react-icons/md';
import { GiArchiveRegister } from 'react-icons/gi';
import {
  RiMapPinAddLine, RiDeleteBin5Fill, RiLogoutCircleFill, RiLoginCircleFill, RiAccountBoxFill,
} from 'react-icons/ri';
import { logoutUser } from '../store/actions/userActions';
import { logout } from '../store/reducers/userReducer';
import trekkerlogo from '../trekker.png';
import styles from './Sidebar.module.scss';

const {
  sidebar, logo, links, link, logoImg, linksItem, icons, button,
} = styles;

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
    <div className={sidebar}>
      <div className={logo}>
        <img src={trekkerlogo} alt="logo" className={logoImg} />
      </div>

      <ul className={links}>

        <li className={linksItem}>
          <Link to="/destinations" className={link}>
            <MdPlace className={icons} />
            Destinations
          </Link>
        </li>
        <li className={linksItem}>
          <Link to="/reservations/myreservation" className={link}>
            <GiArchiveRegister className={icons} />
            My Reservations
          </Link>
        </li>
        {isLoggedIn === 'selase' && (
        <li className={linksItem}>
          <Link to="/addsafari" className={link}>
            <RiMapPinAddLine className={icons} />
            Add Safari
          </Link>
        </li>
        )}
        {isLoggedIn === 'selase' && (
        <li className={linksItem}>
          <Link to="/deletesafari" className={link}>
            <RiDeleteBin5Fill className={icons} />
            Delete Safari
          </Link>
        </li>
        )}
        {!isLoggedIn && (
        <li className={linksItem}>
          <Link to="/login" className={link}>
            <RiLoginCircleFill className={icons} />
            Login
          </Link>
        </li>
        )}
        {!isLoggedIn && (
        <li className={linksItem}>
          <Link to="/register" className={link}>
            <RiAccountBoxFill className={icons} />
            Register
          </Link>
        </li>
        )}
        {isLoggedIn && (
        <button type="button" className={button} style={{ marginBottom: 20 }} onClick={handleLogout}>
          <RiLogoutCircleFill className={icons} />
          Logout
        </button>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
