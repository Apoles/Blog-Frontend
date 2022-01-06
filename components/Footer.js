import React from "react";

import styles from "../styles/footer.module.css";
import { useDispatch, useSelector } from "react-redux";

export const Footer = () => {
  const { userLogin } = useSelector((state) => state);

  const dispatch = useDispatch();

  console.log("dönenler bu", userLogin);

  console.log(userLogin);
  return <div className={styles.footerMain}></div>;
};
