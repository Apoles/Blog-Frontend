import React, { useEffect, useState } from "react";
import { MyCard } from "../components/MyCard";
import styles from "../styles/homeIndex.module.css";

import Navbars from "../components/Navbar.js";
import hakkimda from "../public/hakkımda.jpeg";
import blogone from "../public/blogone.jpg";
import resim from "../public/resimOne.jpg";
import Image from "next/image";
import blogs from "../blogs.js";
import axios from "axios";
import { Spinner } from "react-bootstrap";

export default function Home() {
  const [data, setdata] = useState("f");
  const url =
    "https://blogapoles.herokuapp.com/blog" || "http://localhost:5000/blog/";

  useEffect(async () => {
    await axios.get(url).then((e) => {
      setdata(e.data);
      console.log(e.data);
      console.log("========>", data);
    });
  }, []);

  console.log("====>e", data[0].e);

  return (
    <div className={styles.homeMainDiv} id="home">
      <Navbars></Navbars>
      <div className={styles.indexRow}>
        <div className={styles.indexCol}>
          {data === "f" ? (
            <div style={{ width: "100%", backgroundColor: "red" }}>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            data.map((e, key) => {
              return (
                <div key={key} className={styles.leftSide}>
                  <hr></hr>

                  <MyCard
                    id={e._id}
                    imgSrc={resim}
                    title={e.title}
                    mainTitle={e.mainTitle}
                    time={e.time}
                    content={e.content}
                    like={e.like}
                  ></MyCard>
                </div>
              );
            })
          )}
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
