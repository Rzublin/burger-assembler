import React, { Fragment } from "react";
import styles from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

function SideDrawer({ closeSideDrawer }) {
  return (
    <Fragment>
      <Backdrop clicked={closeSideDrawer} />
      <div className={styles.SideDrawer}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
}

export default SideDrawer;
