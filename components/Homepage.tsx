import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { useState, useCallback, useRef, useEffect } from "react";
import styles from "../Styles/IndexTwo.module.scss";

export default function Homepage() {
  const [brightness, setBrightness] = useState(100);
  const [top, setTop] = useState(20);
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [xPosTrail, setXPosTrail] = useState(0);
  const [yPosTrail, setYPosTrail] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setXPos(clientX);
    setYPos(clientY);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBrightness(brightness - `${Math.floor(window.pageYOffset / 10)}`);
      setTop(top - `${Math.floor(window.pageYOffset / 10)}`);
    });
  }, []);

  return (
    <div>
      <div
        className={styles.pageContainer}
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <div className={styles.sunDiv}></div>
        <Fade delay={1000} triggerOnce>
          <div className={styles.writingContainer} style={{ top: `${top}%` }}>
            <h3>Envisaged, Designed, Crafted by,</h3>
            <h1>Sterling Studio</h1>
            <h2>Web Agency</h2>
          </div>
        </Fade>

        <div
          className={styles.treesDiv}
          style={{ filter: `brightness(${brightness}%)` }}
        ></div>
        <div className={styles.backgroundDiv}></div>
      </div>
    </div>
  );
}
