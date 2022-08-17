import React from 'react';
import PropTypes from 'prop-types';

const Notification = (props) => {
  const { title, message } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Notification;
