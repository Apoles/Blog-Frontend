import React, { useState } from "react";
import { Navbars } from "./Navbar.js";
import styles from "../styles/layout.module.css";
import { Footer } from "./Footer.js";
import { Hakkimda, NavbarTwo } from "./Hakkimda.js";

import { FaBars, FaTimes } from "react-icons/fa";
const value = true;

const Layout = ({ children }) => {
  const [state, setstate] = useState(true);
  return (
    <>
      <div className={styles.layoutMainDiv}>
        <div className={styles.middle}>
          <Navbars></Navbars>

          <main className={styles.main}>{children}</main>
        </div>
        )
      </div>
    </>
  );
};
export default Layout;
