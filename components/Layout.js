import React, { useState } from "react";
import { Navbars } from "./Navbar.js";
import styles from "../styles/layout.module.css";
import { Footer } from "./Footer.js";
import { Hakkimda, NavbarTwo } from "./Hakkimda.js";

import { FaBars, FaTimes } from "react-icons/fa";
import BoostNavbar from "./BoostNavbar.js";
const value = true;

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.layoutMainDiv}>
        <BoostNavbar></BoostNavbar>
        <div className={styles.middle}>
          <main className={styles.main}>{children}</main>
        </div>
        )
      </div>
    </>
  );
};
export default Layout;
