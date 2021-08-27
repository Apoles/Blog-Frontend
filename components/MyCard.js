import React from "react";
import styles from "../styles/myCard.module.css";
import { Card, Button } from "react-bootstrap";
import { Divider } from "semantic-ui-react";
import Link from "next/link";
import Image from "next/image";

import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export const MyCard = (params) => {
  console.log(params);
  return (
    <div className={styles.mainMyCardDiv}>
      <div className={styles.imageDiv}>
        <Image src={params.imgSrc} alt="Landscape picture"></Image>
      </div>

      <div className={styles.cardCol}>
        <p>{params.title}</p>
        <h2>{params.mainTitle}</h2>
        <p>{params.time}</p>
        <p>{params.content}</p> <br></br>
        <Divider className={styles.zz} horizontal>
          <Link href="/about">
            <a>
              {" "}
              <FaFacebook></FaFacebook>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <FaInstagram></FaInstagram>
            </a>
          </Link>
          <Link href="/about">
            <a>
              {" "}
              <FaTwitter></FaTwitter>
            </a>
          </Link>
        </Divider>
        <br></br>
      </div>
    </div>
  );
};
