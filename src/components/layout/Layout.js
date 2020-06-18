import React, { Fragment } from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

function Layout({ children }) {
  return (
    <Fragment>
      <Toolbar />
      <SideDrawer />
      <main className={styles.content}>{children}</main>
    </Fragment>
  );
}

export default Layout;
