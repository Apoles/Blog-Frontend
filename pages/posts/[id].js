import axios from "axios";
import React from "react";
import styles from "../../styles/ids.module.css";
import Image from "next/image";

import Gist from "react-gist";
import resimTwo from "../../public/resimTwo.png";
import { CommentProfile } from "../../components/CommentProfile";
import { useState, useEffect } from "react";

const Posts = ({ post }) => {
  const url =
    "https://blogapoles.herokuapp.com/comment/" ||
    "http://localhost:5000/comment/";

  const [data, setdata] = useState([]);

  async function getComment() {
    await axios.get("http://localhost:5000/comment").then((e) => {
      console.log(e.data);
      setdata(e.data);
    });
  }

  useEffect(() => {
    getComment();
  }, []);

  console.log("===ASDASDASDAS>", post);

  return (
    <div>
      <div className={styles.homePageMainDiv}>
        <div className={styles.denemeContainer}>
          <h1>Deneme yazımdır</h1>
          <p>{post[0].title}</p>
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

      {data.map((val, index) => {
        return (
          <div key={index}>
            {" "}
            <CommentProfile
              userName={val.userName}
              email={val.email}
              comment={val.comment}
            ></CommentProfile>
            <br></br>
            <br></br>
          </div>
        );
      })}

      <form className="ui reply form">
        <div className="field">
          <textarea></textarea>
          <textarea></textarea>
        </div>
        <div className="ui blue labeled submit icon button">
          <i className="icon edit" onClick={() => {}}></i> Add Reply
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const url =
    "https://blogapoles.herokuapp.com/blog/" || "http://localhost:5000/blog/";
  /* const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );*/
  const result = await axios.get(
    { url },
    {
      headers: {
        id: context.params.id,
      },
    }
  );

  console.log(result);
  const post = await result.data;

  return {
    props: {
      post,
    },
  };
};

export default Posts;

/*
   onClick={() => {
          axios.post("http://localhost:5000/comment", {
            blogId: post[1]._id,
            email: "Apoles@gmail.com",
            userName: "Apolessss",
            comment: "Bidaha yazma o köylü nineni .....",
            date: Date.now(),
          });
        }}
*/
