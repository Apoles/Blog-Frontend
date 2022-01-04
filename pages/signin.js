import React from "react";
import { SignIn } from "../components/SignIn";
import styles from "../styles/signin.module.css";

export default function signin() {
  return (
    <div className={styles.main}>
      <SignIn></SignIn>
    </div>
  );
}
