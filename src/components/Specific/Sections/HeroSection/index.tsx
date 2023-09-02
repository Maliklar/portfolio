"use client";

import styles from "./index.module.scss";
import Image from "next/image";
import MyImage from "@/assets/images/malik.png";
import Background from "@/assets/svg/bg.svg";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
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
      if (typeof window === "undefined") return;
      const opacity = 1 - window.scrollY / innerHeight;
      setOpacity(opacity === Infinity ? 1 : opacity);
    }
    addEventListener("scroll", scrollHandler);

    return () => {
      addEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <section
      className={styles.container}
      style={{
        top:
          opacity <= 0
            ? "0px"
            : -(typeof window === "object" ? window.scrollY : 0) / 3 + "px",
      }}
    >
      <Reveal
        role="img"
        title="Malik Elbadri"
        style={{
          opacity: opacity,
          zIndex: opacity <= 0 ? -100 : "unset",
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
      </Reveal>
      <Reveal
        className={styles.content}
        style={{
          opacity: opacity,
          zIndex: opacity <= 0 ? -100 : "unset",
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
      </Reveal>

      <div role="img" title="Background" className={styles.background}>
        <Image
          src={Background}
          fill
          style={{ objectFit: "cover" }}
          alt="background"
        />
      </div>
    </section>
  );
};

export default HeroSection;
