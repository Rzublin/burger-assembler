import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import PropTypes from "prop-types";

function Modal({ children, cancelOrderBurger }) {
  return (
    <Fragment>
      <Backdrop clicked={cancelOrderBurger} />
      <div className={styles.Modal}>{children}</div>
    </Fragment>
  );
}

Modal.propTypes = {
  cancelOrderBurger: PropTypes.func.isRequired,
};

export default Modal;
