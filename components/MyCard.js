import React, { useEffect, useState } from "react";
import styles from "../styles/myCard.module.css";

import { Divider } from "semantic-ui-react";
import axios from "axios";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { Card, Button } from "react-bootstrap";

import { FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";

export const MyCard = (params) => {
  const url =
    "https://blogapoles.herokuapp.com/blog/like" ||
    "http://localhost:5000/blog/like/";
  useEffect(() => {
    () => {};
  }, [params.like]);

  console.log(params.id);
  return (
    <div className={styles.mainMyCardDiv}>
      <div className={styles.imageDiv}>
        <Image src={params.imgSrc} alt="Landscape picture"></Image>
      </div>

      <div className={styles.cardCol}>
        <a href={`/posts/${params.id}`}>
          <p>{params.title}</p>
          <h2>{params.mainTitle}</h2>
          <p>{params.time}</p>{" "}
          {params.content.length <= 300 ? (
            <p>{params.content}</p>
          ) : (
            <p>{params.content.slice(0, 300)} ...</p>
          )}
        </a>

        <br></br>
        <Divider className={styles.zz} horizontal>
          <ul>
            <li>
              <div className={styles.heartButton}>
                {" "}
                <FontAwesomeIcon
                  color="red"
                  style={{ marginRight: "4px" }}
                  onClick={async () => {
                    await axios.get(`${url}${params.id}`, {}).then((data) => {
                      console.log(data.status);
                    });
                    console.log("bastın");

                    //
                  }}
                  icon={faHeart}
                ></FontAwesomeIcon>
                <p>{params.like}</p>
              </div>
            </li>

            <li>
              <FacebookShareButton url="http://localhost:3000/">
                <FaFacebook color="blue"></FaFacebook>
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton url="http://localhost:3000/">
                <FaTwitter color="turquoise"></FaTwitter>
              </TwitterShareButton>
            </li>
            <li>
              {" "}
              <WhatsappShareButton url="http://localhost:3000/">
                {" "}
                <FaWhatsapp color="green"></FaWhatsapp>
              </WhatsappShareButton>
            </li>
          </ul>
        </Divider>
        <br></br>
      </div>
    </div>
  );
};

/*
 <div className={styles.mainMyCardDiv}>
      <div className={styles.imageDiv}>
        <Image src={params.imgSrc} alt="Landscape picture"></Image>
      </div>

      <div className={styles.cardCol}>
        <a href={`/posts/${params.id}`}>
          <p>{params.title}</p>
          <h2>{params.mainTitle}</h2>
          <p>{params.time}</p>{" "}
          {params.content.length <= 300 ? (
            <p>{params.content}</p>
          ) : (
            <p>{params.content.slice(0, 300)} ...</p>
          )}
        </a>

        <br></br>
        <Divider className={styles.zz} horizontal>
          <ul>
            <li>
              <div>
                {" "}
                <FontAwesomeIcon
                  color="red"
                  style={{ marginRight: "4px" }}
                  onClick={() => {
                    console.log("bastın" + params.id);

                    //
                  }}
                  icon={faHeart}
                ></FontAwesomeIcon>
              </div>
            </li>
            <li>
              <FacebookShareButton url="http://localhost:3000/">
                <FaFacebook color="blue"></FaFacebook>
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton url="http://localhost:3000/">
                <FaTwitter color="turquoise"></FaTwitter>
              </TwitterShareButton>
            </li>
            <li>
              {" "}
              <WhatsappShareButton url="http://localhost:3000/">
                {" "}
                <FaWhatsapp color="green"></FaWhatsapp>
              </WhatsappShareButton>
            </li>
          </ul>
        </Divider>
        <br></br>
      </div>
    </div>
*/
