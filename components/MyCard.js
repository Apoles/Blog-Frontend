import React, { useEffect, useState } from "react";
import styles from "../styles/myCard.module.css";

import { Divider } from "semantic-ui-react";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";

export const MyCard = (params) => {
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
  );
};
