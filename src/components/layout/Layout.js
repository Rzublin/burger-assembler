import React, { Fragment } from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <Fragment>
      <div>Toolbar</div>
      <main className={styles.content}>{children}</main>
    </Fragment>
  );
}

export default Layout;
