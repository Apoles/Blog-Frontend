import React from "react";
import styles from "../styles/hakkimda.module.css";

export const Hakkimda = () => {
  return (
    <div>
      <div className={styles.navButtonClick}>
        <div className={styles.navLeft}>
          <div className={styles.cont}>
            <h1>GEZİNTİ</h1>
            <br></br>
            <br></br>
            <div>
              <p>01</p>
              <p>-</p>
              <p>ANA SAYFA</p>
            </div>
            <div>
              <p>02</p>
              <p>-</p>
              <p>İLETİŞİM</p>
            </div>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.cont}>
            <h1>İLETİŞİM</h1>
            <br></br>
            <br></br>
            <div>
              <p>Mail Adresi</p>

              <p>emine176gumus@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
