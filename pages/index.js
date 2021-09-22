import React from "react";
import { MyCard } from "../components/MyCard";
import styles from "../styles/homeIndex.module.css";
import { Col } from "react-bootstrap";
import { Divider } from "semantic-ui-react";
import hakkimda from "../public/hakkımda.jpg";
import blogone from "../public/blogone.jpg";
import Image from "next/image";

export default function Home({ videos }) {
  console.log(videos);
  return (
    <div className={styles.homeMainDiv}>
      <div className={styles.indexRow}>
        <div>
          <hr></hr>
          <MyCard
            id={0}
            imgSrc={blogone}
            title={videos[0].title}
            mainTitle={videos[0].mainTitle}
            time={videos[0].time}
            content={videos[0].content}
          ></MyCard>
          <hr></hr>

          <MyCard
            id={1}
            imgSrc={blogone}
            title="Flutter"
            mainTitle="FLutter ile NavigationBar oluşturma"
            time="7.11.2017"
            content="Bu yazımda flutter ile  nasıl navigationbar yapılır onu göstereceğim.Öncelikle navigation bar ne işe yarar ona bakalım..."
          ></MyCard>
          <hr></hr>
          <MyCard
            id={2}
            imgSrc={blogone}
            title=""
            mainTitle="17 yaşındaki kızın ilk öyküsü"
            time="12 AĞUSTOS 2021 "
            content="
            (son halini kaybettiğim ama taslak şeklini bulduğum bu yazıyı, yaşımın küçüklüğünün konforuyla hatalarına, eksiklerine takılmadan yükledim. unuttum dediğim bu şey meğerse hiç unutmadığım içimde bir yermiş. buradan o zamana baktığımda yazdıklarımın bugüne ışık tutmasının şaşkınlığı içerisindeyim. oysa çok tepeden bakardım eskiye) "
          ></MyCard>
          <hr></hr>
        </div>
        <div className={styles.hakkimizda}>
          <h1>Hakkımda</h1>
          <div className={styles.hakkimdaImg}>
            <Image src={hakkimda} alt="Landscape picture" />
          </div>

          <p>Aysenur</p>
          <p>
            Ben cok güzel bi hanfendiyim ayrıca abimde çok zekidir ve
            yakışıklıdır abimi çok severim Ben çok güzel bi hanfendiyim ayrıca
            abimde çok zekidir ve yakışıklıdır abimi çok severim Ben çok güzel
            bi hanfendiyim ayrıca abimde çok zekidir ve yakışıklıdır abimi çok
            severim
          </p>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts");

  const videos = await res.json();

  return {
    props: {
      videos,
    },
  };
};
