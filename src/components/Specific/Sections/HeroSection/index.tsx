"use client";

import styles from "./index.module.scss";
import Image from "next/image";
import MyImage from "@/assets/images/malik.jpg";
import Background from "@/assets/svg/bg.svg";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
const HeroSection = () => {
  const [opacity, setOpacity] = useState(1);
  const continueClickHandler = () => {
    setOpacity(innerHeight / scrollY);
    scrollTo({
      top: innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    function scrollHandler() {
      const opacity = 1 - scrollY / innerHeight;
      setOpacity(opacity === Infinity ? 1 : opacity);
    }
    addEventListener("scroll", scrollHandler);

    return () => {
      addEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div
        role="img"
        title="Me"
        style={{
          opacity: opacity,
        }}
        className={styles.imageContainer}
      >
        <Image
          src={MyImage.src}
          fill
          style={{ objectFit: "cover", opacity: opacity }}
          alt="Malik Elbadri"
          priority
        />
      </div>
      <div
        className={styles.content}
        style={{
          opacity: opacity,
        }}
      >
        <h1 className={styles.header}>Hello, {"I'm "}Malik.</h1>
        <p className={styles.subtitle}>
          I am a full stack web developer specialized in building and
          maintaining beautiful and accessible websites using various
          technologies.
        </p>

        <button className={styles.button} onClick={continueClickHandler}>
          CHECKOUT MY WORK <FaChevronRight />{" "}
        </button>
      </div>
      <Image
        className={styles.background}
        src={Background}
        fill
        style={{ objectFit: "cover" }}
        alt="background"
      />
    </section>
  );
};

export default HeroSection;
