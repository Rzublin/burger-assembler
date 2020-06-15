import React, { Fragment } from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

function Layout({ children }) {
  return (
    <Fragment>
      <Toolbar />
      <main className={styles.content}>{children}</main>
    </Fragment>
  );
}

export default Layout;
