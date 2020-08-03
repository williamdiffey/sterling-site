// import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
// import PaletteIcon from "@material-ui/icons/Palette";
// import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
// import LanguageIcon from "@material-ui/icons/Language";
import styles from "../Styles/CreateProcess.module.scss";
import { useState, useCallback, useRef, useEffect } from "react";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

export default function CreateProcess() {
  return (
    <div className={styles.createProcessContainer}>
      <div className={styles.titleContainer}>
        <Slide direction="left" delay={500} triggerOnce>
          <h1>
            What We Do<span>:</span>
          </h1>
        </Slide>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.createCard} id={styles.cardOne}>
          <div className={styles.leftCard}>
            {/* <EmojiObjectsIcon className={styles.icons} id={styles.lightbulb} /> */}
          </div>
          <div className={styles.rightCard}>
            <h2>Title</h2>
            <p>Words to describe what we do</p>
          </div>
        </div>
        <div className={styles.createCard} id={styles.cardTwo}>
          <div className={styles.leftCard}>
            {/* <PaletteIcon className={styles.icons} id={styles.palette} /> */}
          </div>
          <div className={styles.rightCard}>
            <h2>Title</h2>
            <p>Words to describe what we do</p>
          </div>
        </div>
        <div className={styles.createCard} id={styles.cardThree}>
          <div className={styles.leftCard}>
            {/* <ImportantDevicesIcon className={styles.icons} id={styles.seo} /> */}
          </div>
          <div className={styles.rightCard}>
            <h2>Title</h2>
            <p>Words to describe what we do</p>
          </div>
        </div>
        <div className={styles.createCard} id={styles.cardFour}>
          <div className={styles.leftCard}>
            {/* <LanguageIcon className={styles.icons} id={styles.web} /> */}
          </div>
          <div className={styles.rightCard}>
            <h2>Title</h2>
            <p>Words to describe what we do</p>
          </div>
        </div>
      </div>
    </div>
  );
}
