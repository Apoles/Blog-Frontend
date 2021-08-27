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
      <br></br>
      <div className={styles.navbarDiv}>
        {" "}
        <Navbar fixed="true" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
