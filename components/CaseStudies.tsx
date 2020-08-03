import styles from "../Styles/caseStudies.module.scss";
import { useState, useCallback, useRef, useEffect } from "react";
import React from "react";
import Link from "../utils/ActiveLink";
import CaseStudy from "../components/CaseStudies/CaseStudy";
import CaseStudyOne from "../components/CaseStudies/CaseStudyOne";
import CaseStudyTwo from "../components/CaseStudies/CaseStudyTwo";
import { Fade, Slide } from "react-awesome-reveal";

export default function CaseStudies() {
  let [value, setValue] = React.useState({ value: <CaseStudy /> });
  let componentLink = value.value;

  const caseStudyOne = () => {
    setValue({ value: <CaseStudyOne /> });
  };

  const caseStudyTwo = () => {
    setValue({ value: <CaseStudyTwo /> });
  };

  return (
    <div className={styles.createProcessContainer}>
      <div className={styles.titleContainer}>
        <Slide direction="left" delay={500} triggerOnce>
          <h1>
            Case Studies<span>:</span>
          </h1>
        </Slide>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.leftContainer}>
          <ul>
            <li>
              <Link activeClassName={styles.active} href="" scroll={false}>
                <a onClick={caseStudyOne} id={styles.linkOne}>
                  Case Study 1
                </a>
              </Link>
            </li>

            <li>
              <Link activeClassName={styles.active} href="" scroll={false}>
                <a onClick={caseStudyTwo} id={styles.linkTwo}>
                  Case Study 2
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.writing}>{componentLink}</div>
        </div>
      </div>
    </div>
  );
}
