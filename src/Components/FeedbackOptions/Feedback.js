import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(key => {
        return (
          <button
            className={styles.btn}
            key={key}
            type="button"
            name={key}
            onClick={onLeaveFeedback}
          >
            {key}
          </button>
        );
      })}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
