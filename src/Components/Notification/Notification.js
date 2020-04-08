import React from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css";

const Notification = ({ message }) => (
  <h3 className={styles.message}>{message}</h3>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
