/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginUser } from '../store/actions/userActions';
import { hideNotification } from '../store/reducers/uiReducers';
import trekker from '../trekker.png';
import styles from './Login.module.scss';

const Login = () => {
  const userRef = useRef();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const {
    loginContainer, loginForm,
  } = styles;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(loginUser(user))
      .unwrap()
      .then(() => {
        localStorage.setItem('LOGGED_IN', user.username);
        setTimeout(() => dispatch(hideNotification()), 2000);
      })
      .catch(() => { setLoading(false); });
    setUser({
      username: '',
      password: '',
    });
  };

  return (
    <>
      {isLoggedIn && (<Navigate to="/destinations" replace />)}
      <section className={loginContainer}>
        <div className={loginForm}>
          <img src={trekker} alt="trekker logo" />
          <form onSubmit={handleSubmit} method="">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              onChange={onInputChange}
              value={user.username}
              name="username"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={onInputChange}
              value={user.password}
              name="password"
              required
            />
            <button type="submit">Sign In</button>
            <Link to="/register">Register</Link>
          </form>
        </div>
      </section>
      {loading && <p>Loading...</p>}
    </>
  );
};

export default Login;
