/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { registerUser } from '../store/actions/userActions';
import { hideNotification } from '../store/reducers/uiReducers';
import styles from './Login.module.scss';

const Register = () => {
  const userRef = useRef();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [user, setUser] = useState({
    full_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
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

  const validate = (user) => {
    const errors = {};

    if (!user.full_name) {
      errors.full_name = 'Full name is required';
    } else if (user.full_name.length < 3) {
      errors.full_name = 'Full name must be at least 3 characters';
    }
    if (!user.username) {
      errors.username = 'Username is required';
    } else if (user.username.length < 3) {
      errors.username = 'Username must be at least 3 characters';
    }
    if (!user.email) {
      errors.email = 'Email is required';
    }
    if (!user.password) {
      errors.password = 'Password is required';
    } else if (user.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!user.password_confirmation) {
      errors.password_confirmation = 'Password confirmation is required';
    } else if (user.password !== user.password_confirmation) {
      errors.password_confirmation = 'Password confirmation does not match';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(validate(user));
    if (Object.keys(errors).length !== 0) {
      setLoading(false);
      return;
    }
    dispatch(registerUser(user))
      .unwrap()
      .then(() => {
        localStorage.setItem('LOGGED_IN', { username: user.username });
        setTimeout(() => dispatch(hideNotification()), 2000);
      })
      .catch(() => { setLoading(false); });
    setUser({
      full_name: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    });
  };

  return (
    <>
      {isLoggedIn && (<Navigate to="/destinations" replace />)}
      <section className={loginContainer}>
        {/* <h1>Register</h1> */}
        <div className={loginForm}>
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
            {errors.username && <p className="error">{errors.username}</p>}

            <label htmlFor="full_name">Full name</label>
            <input
              type="text"
              id="full_name"
              ref={userRef}
              onChange={onInputChange}
              value={user.full_name}
              name="full_name"
              required
            />
            {errors.full_name && <p className="error">{errors.full_name}</p>}

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref={userRef}
              onChange={onInputChange}
              value={user.email}
              name="email"
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={onInputChange}
              value={user.password}
              name="password"
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <label htmlFor="password_confirmation">Password confirmation</label>
            <input
              type="password"
              id="password_confirmation"
              onChange={onInputChange}
              value={user.password_confirmation}
              name="password_confirmation"
              required
            />
            {errors.password_confirmation && <p className="error">{errors.password_confirmation}</p>}

            <button type="submit">Register</button>
          </form>
        </div>
      </section>
      {loading && <p>Loading...</p>}
    </>
  );
};

export default Register;
