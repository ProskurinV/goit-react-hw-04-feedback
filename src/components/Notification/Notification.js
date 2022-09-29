import PropTypes from 'prop-types';
import { NotifMessage } from './Notification.styled';

export default function Notification({ message }) {
  return <NotifMessage>{message}</NotifMessage>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
