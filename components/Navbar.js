import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styles from "../styles/navbar.module.css";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import resimOne from "../public/resimOne.jpg";
import navbarImg from "../public/navbar.png";
import { Divider } from "semantic-ui-react";

export const Navbars = () => {
  const index = 0;
  return (
    <div>
      <div className={styles.navbarsDiv}>
        <h1>ABDULLAH GÜMÜŞ</h1>
        <div></div>
        <hr style={{ width: "100%" }}></hr>
        <div className={styles.headerbuttons}>
          <Link href="/#home">
            <a>Ana Sayfa</a>
          </Link>
          <Link href="/hakkimda">
            <a>Hakkımda</a>
          </Link>
          <Link href="iletisim/#iletişim">
            <a>İletişim</a>
          </Link>
        </div>
        <hr style={{ width: "100%" }}></hr>

        <div className={styles.iconDiv}>
          <Link href="/">
            <a>
              <FaTwitter size="20"></FaTwitter>
            </a>
          </Link>
          <Link href="/">
            <a>
              <FaInstagram size="20"></FaInstagram>
            </a>
          </Link>

          <Link href="/">
            <a>
              <FaFacebook size="20"></FaFacebook>
            </a>
          </Link>

          <Link href="/">
            <a>
              <FaLinkedin size="20"></FaLinkedin>
            </a>
          </Link>
        </div>
      </div>

      <div className={styles.navbarDiv}></div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
