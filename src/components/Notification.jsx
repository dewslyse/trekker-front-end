import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

const { notification, success, errors } = styles;

const Notification = (props) => {
  const { message, error } = props;
  const status = error ? errors : success;

  return (
    <div className={`${notification} ${status}`}>
      {message}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Notification;
