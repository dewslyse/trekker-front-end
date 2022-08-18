/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUser } from '../store/actions/userActions';

const Login = () => {
  const userRef = useRef();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

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
    dispatch(loginUser(user));
    setUser({
      username: '',
      password: '',
    });
  };

  return (
    <>
      {isLoggedIn && (<Navigate to="/destinations/1" replace />)}
      <section>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
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
        </form>
      </section>
    </>
  );
};

export default Login;
