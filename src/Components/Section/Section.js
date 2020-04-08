import React from "react";
import styles from "./Section.module.css";

const Section = (props) => (
  <>
    <h2 className={styles.title}>{props.title}</h2>
    {props.children}
  </>
);

export default Section;
