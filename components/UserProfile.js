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
import resim from "../public/kralice.jpg";

const UserProfile = () => {
  const [state, setstate] = useState({});
  const url =
    "https://blogapoles.herokuapp.com/login/find/" ||
    "http://localhost:5000/login/find/";

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const id = localStorage.getItem("id");

      console.log("asdasdasdasdsasd", id);
      axios
        .get(`${url}${id || "61d45a9be945f5fe2b9eb2fc"}`, {})
        .then((data) => {
          const post = data.data;

          setstate(post.data);
        })

        .catch((err) => {
          console.log("errror da error");
          console.log(err);
        });
    }
  }, []);

  console.log(state);

  return (
    <div className={styles.mainDiv}>
      <div className={styles.col}>
        <h1>ACCOUNT</h1>
        <div className={styles.row}>
          <div>
            <Card
              style={{
                width: "21rem",
                padding: "2rem",
                marginRight: "1rem",
                borderRadius: "1rem",
                backgroundColor: "whitesmoke",
              }}
            >
              <Card.Img
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "2rem",
                  display: "block",
                  margin: "0 auto",
                }}
                variant="top"
                src="kralice.jpg"
              />
              <Card.Body
                style={{
                  textAlign: "center",
                }}
              >
                <Card.Title>Aysenur gümüş</Card.Title>
                <Card.Text>Bursa İnegöl</Card.Text>
                <Button variant="primary">Upload picture</Button>
              </Card.Body>
            </Card>
          </div>

          <div className={styles.colProfileInfo}>
            <h1>Profile</h1>
            <p>The information can be edited</p>
            <br></br>
            <hr></hr>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
            </Form>
            <br></br>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
