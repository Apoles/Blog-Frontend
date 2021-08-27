import React from "react";
import { Navbars } from "./Navbar.js";
import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.layoutMainDiv}>
        <Navbars></Navbars>

        <main>{children}</main>
      </div>
    </>
  );
};
export default Layout;
