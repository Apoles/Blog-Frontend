import React from "react";
import styles from "../styles/signComp.module.css";
import { useState } from "react";
import axios from "axios";
import { Form, Button, Col, InputGroup } from "react-bootstrap";
import Router from "next/router";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [bool, setBool] = useState(false);
  const [password, setPassword] = useState("");
  const url =
    "https://blogapoles.herokuapp.com/login/log" ||
    "http://localhost:5000/blog/login/log";

  function validateForm() {
    return email.length > 0 && password.length > 5;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function login(email, password) {
    axios
      .post(
        { url },
        {
          userName: email,
          password: password,
        }
      )
      .then((e) => {
        localStorage.setItem("tok", e.data.data.token);
        localStorage.setItem("refTok", e.data.data.refToken);

        if (e.status == 200) {
          console.log("=AA==>>AA=SASA=S=AS=AA=S", e.data.data);

          localStorage.setItem("id", e.data.data.id);
          localStorage.setItem("atName", e.data.data.atName);

          Router.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
        setBool(true);
      });
  }

  console.log({ email, password });

  return (
    <div className={styles.Main}>
      <div className={styles.Login}>
        <p>500 rp kazanmak için giriş</p>
        <h1 style={{ textAlign: "center" }}>Lol hesabina giriş yap</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>

            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setBool(false);
              }}
            />
          </Form.Group>
          <br></br>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);

                setBool(false);
              }}
            />
            <Form.Text>en az 6 en fazla 12 karakter giriniz</Form.Text>
          </Form.Group>

          <br></br>

          <div className="d-grid gap-2">
            <Button
              onClick={() => {
                try {
                  login(email, password);
                } catch (error) {
                  console.log("burda jata");
                }
              }}
              size="lg"
              type="submit"
              disabled={!validateForm()}
            >
              Login
            </Button>
          </div>
          <br></br>
          <p>Forget Password? </p>
          <hr></hr>
          <div className="col-md-12 text-center">
            <button type="button" className="btn btn-primary">
              Create Account
            </button>
          </div>
        </Form>
        <br></br>
        {bool ? (
          <p style={{ color: "red" }}>
            Kullanıcı adi yada şifre yanlış girildi
          </p>
        ) : null}
      </div>
    </div>
  );
};
