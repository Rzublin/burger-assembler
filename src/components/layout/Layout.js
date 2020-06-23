import React, { Fragment, useState } from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

function Layout({ children }) {
  const [closed, setClosed] = useState(false);
  const closeSideDrawer = () => {
    setClosed(!closed);
  };
  const openSideDrawer = () => {
    setClosed(!closed);
  };
  return (
    <Fragment>
      <Toolbar openSideDrawer={openSideDrawer} />
      {closed ? <SideDrawer closeSideDrawer={closeSideDrawer} /> : null}
      <main className={styles.content}>{children}</main>
    </Fragment>
  );
}

export default Layout;
