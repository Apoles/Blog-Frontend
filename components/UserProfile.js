import React from "react";
import { useState, useEffect } from "react";
import {
  Row,
  Form,
  Button,
  Col,
  InputGroup,
  Card,
  Container,
} from "react-bootstrap";
import styles from "../styles/profile.module.css";
import quenn from "../public/kralice.jpg";
import axios from "axios";

const UserProfile = () => {
  const [state, setstate] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const id = localStorage.getItem("id");

      console.log("asdasdasdasdsasd", id);
      axios
        .get(
          `http://localhost:5000/login/find/${
            id || "61d45a9be945f5fe2b9eb2fc"
          }`,
          {}
        )
        .then((data) => {
          const post = data.data;

          setstate(post);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  console.log(
    "=====================================================ananananmamammmam",
    state
  );

  return (
    <div>
      <>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="5">
              <Card>
                <Card.Body>
                  <Form>
                    <Col>
                      <Col className="px-1" md="9">
                        <Form.Group>
                          <label>Username</label>
                          <br></br>

                          <Form.Control
                            defaultValue="michael23"
                            placeholder="Username"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="9">
                        <Form.Group>
                          <br></br>
                          <br></br>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>

                          <Form.Control
                            placeholder="Email"
                            type="email"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Col>

                    <Col>
                      <Col className="px-1" md="9">
                        <Form.Group>
                          <br></br>
                          <br></br>
                          <label>First Name</label>
                          <br></br>
                          <Form.Control
                            defaultValue="Mike"
                            placeholder="Company"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="9">
                        <Form.Group>
                          <br></br>
                          <br></br>
                          <label>Last Name</label>
                          <br></br>

                          <Form.Control
                            defaultValue="Andrew"
                            placeholder="Last Name"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Col>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col md="5">
              <Card>
                <Card.Img
                  style={{ height: "290px" }}
                  variant="top"
                  src="kralice.jpg"
                />
                <Card.Body>
                  <Card.Text>Allllllllll hyeter la yeter aqqqclea</Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default UserProfile;
