import React from "react";
import { Navbars } from "./Navbar.js";
import styles from "../styles/layout.module.css";
import { Footer } from "./Footer.js";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.layoutMainDiv}>
        <div className={styles.middle}>
          {" "}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Navbars></Navbars>
          <main className={styles.main}>{children}</main>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
export default Layout;
