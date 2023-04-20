import React from 'react';
import { Message } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ msg }) => {
  return <Message>{msg}</Message>;
};

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};
