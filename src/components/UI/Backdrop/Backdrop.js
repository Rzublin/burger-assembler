import React from "react";
import styles from "./Backdrop.module.css";
import PropTypes from "prop-types";

function Backdrop({ clicked }) {
  return <div className={styles.Backdrop} onClick={clicked}></div>;
}

Backdrop.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default Backdrop;
