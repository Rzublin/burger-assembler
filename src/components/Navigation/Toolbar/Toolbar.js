import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import PropTypes from "prop-types";

function Toolbar({ openSideDrawer }) {
  return (
    <header className={styles.Toolbar}>
      <div onClick={openSideDrawer} className={styles.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}

Toolbar.propTypes = {
  openSideDrawer: PropTypes.func.isRequired,
};

export default Toolbar;
