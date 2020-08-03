import styles from "../Styles/portfolio.module.scss";
import { useState, useCallback, useRef, useEffect } from "react";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
export default function Portfolio(props) {
  const [brightness, setBrightness] = useState(100);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBrightness(brightness - `${Math.floor(window.pageYOffset / 10)}`);
    });
  }, []);

  return (
    <div className={styles.portfolioContainer}>
      <div
        className={styles.portfolioBackground}
        style={{ filter: `brightness(${brightness}%)` }}
      ></div>
      <div className={styles.cardContainer}>
        <div className={styles.titleContainer}>
          <Slide direction="left" delay={500} triggerOnce>
            <h1>
              Portfolio<span>:</span>
            </h1>
          </Slide>
        </div>
        <a href="https://food-van-demo-client.now.sh/signin" target="_blank">
          <div className={styles.cardOne}>
            <div className={styles.hoverDiv}>
              <p>
                "The app that Sterling built for me has managed to help me
                streamline my business so that I spend more time on the food and
                less time on social media."
              </p>
              <p id={styles.quote}>- Jym, Doug's Pizza</p>
            </div>
            <div className={styles.cardBottom}>
              <h2>Food Truck App</h2>
              <h3>Progressive Web App</h3>
            </div>
          </div>
        </a>
        <a href="https://splash-page-one.vercel.app/" target="_blank">
          <div className={styles.cardTwo}>
            <div className={styles.hoverDiv}>
              <p>
                The app that Sterling built for me has managed to help me
                streamline my business so that I spend more time on the food and
                less time on social media.
              </p>
            </div>
            <div className={styles.cardBottom}>
              <h2>Splash Pages</h2>
              <h3>Look what we can do</h3>
            </div>
          </div>
        </a>
        <a href="https://splash-page-one.vercel.app/" target="_blank">
          <div className={styles.cardTwo} id={styles.lastCard}>
            <div className={styles.hoverDiv}>
              <p>
                The app that Sterling built for me has managed to help me
                streamline my business so that I spend more time on the food and
                less time on social media.
              </p>
            </div>
            <div className={styles.cardBottom}>
              <h2>Gym App</h2>
              <h3>Look what we can do</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
