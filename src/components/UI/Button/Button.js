import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ children, buttonType, clicked }) {
  return (
    <button
      onClick={clicked}
      className={`${styles.Button} ${styles[buttonType]}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Button;
