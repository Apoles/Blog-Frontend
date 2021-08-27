import styles from "../styles/homePage.module.css";
import React from "react";
import Image from "next/image";

import Gist from "react-gist";
import resimTwo from "../public/resimTwo.png";

export default function Home() {
  return (
    <div className={styles.homePageMainDiv}>
      <div className={styles.denemeContainer}>
        <h1>Deneme yazımdır</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
          facilisis velit. Nunc justo lorem, feugiat molestie faucibus ac,
          consequat nec magna. Praesent convallis tortor et tortor dapibus, a
          tincidunt felis finibus. Quisque purus nisl, malesuada id lacinia nec,
          sollicitudin ut eros. Mauris mollis mauris in felis viverra, eget
          pulvinar lorem porta. Sed id ullamcorper massa, eget tempus libero.
          Proin eu rhoncus mauris. Mauris ac pharetra turpis. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Suspendisse mattis, enim ut sodales bibendum, purus tellus
          aliquam felis, vel placerat lectus massa vitae justo. Curabitur
          pellentesque a quam vel aliquam. In ornare ultricies nunc, nec
          eleifend est fringilla nec. Cras vestibulum eros ultricies fringilla
          laoreet. Suspendisse sodales odio risus, et ultricies leo elementum
          consequat. Fusce metus enim, tristique eu velit eleifend, fringilla
          tristique purus. Mauris pharetra posuere mauris, id auctor nunc
          eleifend eget. Maecenas in justo sit amet est volutpat lobortis vitae
          id nisl. Praesent in quam ut massa fermentum tempus. In porttitor
          magna et justo ullamcorper consectetur. Nullam in ante a elit maximus
          eleifend. Nunc neque sem, dapibus a viverra ac, sodales volutpat
          tortor.
        </p>
        <Image src={resimTwo} alt="Landscape picture"></Image>
        <p>
          One of the indicators that I really deeply encourage you to use is the
          Relative strength index (RSI), that I’ll talk about today. First I’ll
          spend some time explaining what it is fundamentally and afterwards
          I’ll dive deep into practical applications of it. My firm belief that
          knowing how to use it in practice is of utmost importance is the
          predominant reason for not including the fairly complex mathematical
          background (besides, you’re not here for that). The RSI is an
          oscillator used in technical analysis, which measures the magnitude of
          recent price changes to evaluate overbought or oversold conditions in
          the price. Its value ranges from 0 to 100. Traditionally values above
          70% indicate that an asset is becoming overbought (overvalued), while
          values below 30% indicate that it is getting into oversold
          (undervalued) territory. Both signs indicate that either a correction
          in a price or trend reversal is on the way.
        </p>
        <Gist id="dec57a814571ba5c6d58a9493fe18e37"></Gist>
      </div>
    </div>
  );
}
