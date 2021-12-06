import React from "react";
import { MyCard } from "../components/MyCard";
import styles from "../styles/homeIndex.module.css";
import { Col } from "react-bootstrap";
import { Divider } from "semantic-ui-react";
import hakkimda from "../public/hakkımda.jpeg";
import blogone from "../public/blogone.jpg";
import Image from "next/image";
import blogs from "../blogs.js";

export default function Home() {
  return (
    <div className={styles.homeMainDiv} id="home">
      <div className={styles.indexRow}>
        <div className={styles.indexCol}>
          {blogs.map((e, key) => {
            return (
              <div key={key} className={styles.leftSide}>
                <hr></hr>

                <MyCard
                  id={e.id}
                  imgSrc={blogone}
                  title={e.title}
                  mainTitle={e.mainTitle}
                  time={e.time}
                  content={e.content}
                ></MyCard>
              </div>
            );
          })}
        </div>
        <div className={styles.hakkimizda}>
          <h1>Hakkımda</h1>
          <div className={styles.hakkimdaImg}>
            <div className={styles.imgs}>
              <Image src={hakkimda} alt="Landscape picture" />
            </div>
          </div>
          <hr></hr>
          <p>
            Adım Abdullah. Bu kadar. Fazla anlatabilecek hayat hikayem yok.
            Metafor uzmanıyım desem olmaz, beyin cerrahıyım desem olmaz,
            cumhurbaşkanıyım desem olmaz. Arada buraya javascript yada flutter
            la alakalı yazı atarım o kadar
          </p>
        </div>
      </div>
    </div>
  );
}
