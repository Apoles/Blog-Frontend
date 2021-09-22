import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styles from "../styles/navbar.module.css";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import resimOne from "../public/resimOne.jpg";
import navbarImg from "../public/navbar.png";

export const Navbars = () => {
  return (
    <div>
      <div className={styles.navbarsDiv}>
        <Image src={navbarImg} alt="domains"></Image>
        <div className={styles.iconDiv}>
          <br></br>
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
