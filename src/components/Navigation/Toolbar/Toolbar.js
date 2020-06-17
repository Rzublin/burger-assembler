import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";

function Toolbar() {
  return (
    <header className={styles.Toolbar}>
      <div>Menu</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default Toolbar;
