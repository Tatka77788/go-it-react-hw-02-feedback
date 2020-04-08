import React from "react";
import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <button className={styles.btn} onClick={onLeaveFeedback} type="button">
    {options}
  </button>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.string.isRequired,
};
