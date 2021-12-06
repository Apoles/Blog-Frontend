import axios from "axios";
import React from "react";
import styles from "../../styles/homePage.module.css";
import Image from "next/image";

import Gist from "react-gist";
import resimTwo from "../../public/resimTwo.png";

const Posts = ({ post }) => {
  return (
    <div>
      <div className={styles.homePageMainDiv}>
        <div className={styles.denemeContainer}>
          <h1>Deneme yazımdır</h1>
          <p>{post.productDescription}</p>
          <Image src={resimTwo} alt="Landscape picture"></Image>
          <p>
            One of the indicators that I really deeply encourage you to use is
            the Relative strength index (RSI), that I’ll talk about today. First
            I’ll spend some time explaining what it is fundamentally and
            afterwards I’ll dive deep into practical applications of it. My firm
            belief that knowing how to use it in practice is of utmost
            importance is the predominant reason for not including the fairly
            complex mathematical background (besides, you’re not here for that).
            The RSI is an oscillator used in technical analysis, which measures
            the magnitude of recent price changes to evaluate overbought or
            oversold conditions in the price. Its value ranges from 0 to 100.
            Traditionally values above 70% indicate that an asset is becoming
            overbought (overvalued), while values below 30% indicate that it is
            getting into oversold (undervalued) territory. Both signs indicate
            that either a correction in a price or trend reversal is on the way.
          </p>
          <Gist id="dec57a814571ba5c6d58a9493fe18e37"></Gist>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  /* const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );*/
  const res = await axios.get("http://localhost:7000/product/find", {
    headers: {
      id: context.params.id,
    },
  });
  const post = await res.data;
  return {
    props: {
      post,
    },
  };
};

export default Posts;
