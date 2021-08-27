import React from "react";
import { MyCard } from "../components/MyCard";
import styles from "../styles/homeIndex.module.css";
import { Col } from "react-bootstrap";
import { Divider } from "semantic-ui-react";
import hakkimda from "../public/hakkımda.jpg";
import blogone from "../public/blogone.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.homeMainDiv}>
      <div className={styles.indexRow}>
        <div>
          <hr></hr>
          <MyCard
            imgSrc={blogone}
            title="Hayata dair"
            mainTitle="Gündemin içinde olmak"
            time="11:12:2020"
            content="Türkiye gündemi yine bildiniz gibi. Hatta son aylarda bildiğinizden daha da çirkin. Her gün ayrı bir problem, su yüzüne çıkıyor. Doğa ise su yüzünde biriken bu çirkinlikleri müsilaj ile adeta gözümüze sokuyor. Ancak tabii ki görene, köre ne… Gelin beraber…"
          ></MyCard>
          <hr></hr>

          <MyCard
            imgSrc={blogone}
            title="Flutter"
            mainTitle="FLutter ile NavigationBar oluşturma"
            time="7.11.2017"
            content="Bu yazımda flutter ile  nasıl navigationbar yapılır onu göstereceğim.Öncelikle navigation bar ne işe yarar ona bakalım..."
          ></MyCard>
          <hr></hr>
          <MyCard
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

          <Col xs={600} md={2422}>
            <Image src={hakkimda} alt="Landscape picture" roundedCircle fluid />
          </Col>
          <p>Aysenur</p>
          <p>
            Ben çok güzel bi hanfendiyim ayrıca abimde çok zekidir ve
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
