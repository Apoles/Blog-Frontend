import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Image,
  Button,
} from "react-bootstrap";

import { useState } from "react";

export default function BoostNavbar() {
  const [state, setstate] = useState(false);

  async function hasTok() {
    const data = await localStorage.getItem("tok");
    console.log("=======", data);
    if (data) {
      console.log("girdi ve dödnü");
      setstate(true);
      return true;
    }

    setstate(false);
    return false;
  }

  hasTok();

  return (
    <div>
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Ana Sayfa</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">İletişim</Nav.Link>
                <Nav.Link href="#pricing">Hakkımda</Nav.Link>
              </Nav>{" "}
              <Nav>
                {state ? (
                  <NavDropdown title="@Apoles_py" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/">
                      Profil Bilgileri
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">Hesap Ayarları</NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      async
                      onClick={() => {
                        localStorage.clear();
                      }}
                      href="/"
                    >
                      Oturumu kapat
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav className="me-auto">
                    <Nav.Link href="/signin">oturum aç</Nav.Link>
                  </Nav>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <br />
      </>
    </div>
  );
}

/*
 <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

*/

/*
    <button
              className="me-auto"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50px",
              }}
              class="btn btn-primary  "
            >
              <NavDropdown title="">
                <NavDropdown.Item href="#action/3.1">
                  Profil Bilgileri
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Hesap Ayarları
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  async
                  onClick={() => {
                    localStorage.clear();
                  }}
                  href="/"
                >
                  Oturumu kapat
                </NavDropdown.Item>
              </NavDropdown>
            </button>
*/
