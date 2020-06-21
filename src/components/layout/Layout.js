import React, { Fragment, useState } from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

function Layout({ children }) {
  const [closed, setClosed] = useState(true);
  const closeSideDrawer = () => {
    setClosed(!closed);
  };
  return (
    <Fragment>
      <Toolbar />
      {closed ? <SideDrawer closeSideDrawer={closeSideDrawer} /> : false}
      <main className={styles.content}>{children}</main>
    </Fragment>
  );
}

export default Layout;
