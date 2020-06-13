import React from "react";
import styles from "./Backdrop.module.css";

function Backdrop({ cancelOrderBurger }) {
  return <div className={styles.Backdrop} onClick={cancelOrderBurger}></div>;
}

export default Backdrop;
