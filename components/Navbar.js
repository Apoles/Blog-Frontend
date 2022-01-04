import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styles from "../styles/navbar.module.css";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Navbars = () => {
  const index = 0;
  return (
    <div>
      <div className={styles.navbarsDiv}>
        <h1 className={styles.hbir}>ABDULLAH GÜMÜŞ</h1>

        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/">Ana Sayfa</Nav.Link>
                <Nav.Link href="#action2">İletişim</Nav.Link>
                <Nav.Link href="#action3">Hakkimda</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br></br>
        <br></br>
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

export default Navbars;

/*
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
*/
