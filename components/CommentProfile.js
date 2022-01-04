import React from "react";
import Image from "next/image";
import styles from "../styles/commentProfile.module.css";
import a from "../public/hakkımda.jpeg";
export const CommentProfile = (params) => {
  console.log("======>oarams", params);
  return (
    <div className={styles.commentProfile}>
      <Image width="50px" height="50px" src={a}></Image>
      <div className={styles.column}>
        <div className={styles.row}>
          <p>{params.userName}</p>
          <p>12/12/2000</p>
        </div>
        <p>{params.comment} </p>
      </div>
    </div>
  );
};
