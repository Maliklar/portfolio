"use client";

import MyImage from "@/assets/images/malik.png";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { FaChevronRight, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./index.module.scss";
import { SiFrontendmentor } from "react-icons/si";
const HeroSection = () => {
  const continueClickHandler = () => {};

  return (
    <section className={styles.container}>
      <div className={styles.mainContent}>
        <Reveal instant className={styles.content} direction="left">
          <h1 className={styles.header}>Hello, {"I'm "}Malik.</h1>

          <p className={styles.subtitle}>
            I am a full stack web developer specialized in building and
            maintaining beautiful and accessible websites using various
            technologies.
          </p>

          <button className={styles.button} onClick={continueClickHandler}>
            CHECKOUT MY WORK <FaChevronRight />{" "}
          </button>
        </Reveal>
        <Reveal
          instant
          direction="left"
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
        </Reveal>
      </div>
      <div className={styles.footer}>
        <div className={styles.line} />
        <Reveal direction="left" instant>
          <FaGithub />
        </Reveal>
        <div className={styles.line} />
        <Reveal direction="right" instant>
          <FaLinkedin />
        </Reveal>
        <div className={styles.line} />
        <Reveal direction="left" instant>
          <SiFrontendmentor />
        </Reveal>
        <div className={styles.line} />
      </div>
    </section>
  );
};

export default HeroSection;
