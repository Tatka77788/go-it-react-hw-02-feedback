import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = props => (
  <>
    <h2 className={styles.title}>{props.title}</h2>
    {props.children}
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
export default Section;
