import React from "react";
import styles from "./Modal.module.css";

function Modal({ children }) {
  return <div className={styles.Modal}>{children}</div>;
}

export default Modal;
