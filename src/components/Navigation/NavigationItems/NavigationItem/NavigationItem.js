import React from "react";
import styles from "./NavigationItem.module.css";
import PropTypes from "prop-types";

function NavigationItem({ children, link, active }) {
  return (
    <li className={styles.NavigationItem}>
      <a href={link} className={active ? styles.active : null}>
        {children}
      </a>
    </li>
  );
}

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default NavigationItem;
