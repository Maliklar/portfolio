"use client";

import MyImage from "@/assets/images/malik.png";
import Image from "next/image";
import { FaChevronRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFrontendmentor, SiHackerrank, SiLeetcode } from "react-icons/si";
import styles from "./index.module.scss";
const HeroSection = () => {
  const continueClickHandler = () => {};

  return (
    <header className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <h1 className={styles.header}>Hello,{" I'm "}Malik</h1>
          <p className={styles.subtitle}>
            I am a full stack web developer specialized in building and
            maintaining beautiful and accessible websites using various
            technologies.
          </p>
        </div>
        <div
          role="img"
          title="Malik Elbadri"
          className={styles.imageOuterContainer}
        >
          <div className={styles.imageContainer}>
            <Image
              src={MyImage.src}
              fill
              style={{ objectFit: "cover" }}
              alt="Malik Elbadri"
              priority
            />
          </div>
        </div>
      </div>
      <button className={styles.button} onClick={continueClickHandler}>
        CHECKOUT MY WORK <FaChevronRight />{" "}
      </button>
      <div className={styles.footer}>
        <div className={styles.line} />
        <div className={styles.gitHub}>
          <FaGithub />
        </div>
        <div className={styles.line} />
        <div className={styles.linkedIn}>
          <FaLinkedin />
        </div>
        <div className={styles.line} />
        <div className={styles.feMentor}>
          <SiFrontendmentor />
        </div>
        <div className={styles.line} />
        <div className={styles.leetCode}>
          <SiLeetcode />
        </div>
        <div className={styles.line} />
        <div className={styles.hr}>
          <SiHackerrank />
        </div>
        <div className={styles.line} />
      </div>
    </header>
  );
};

export default HeroSection;
