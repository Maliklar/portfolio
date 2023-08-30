import Button from "@/components/Buttons/Button";
import styles from "./index.module.scss";
import Image from "next/image";
import MyImage from "@/assets/images/malik.jpg";
import Background from "@/assets/svg/bg.svg";
import { FaChevronRight } from "react-icons/fa";
const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div role="img" title="Me" className={styles.imageContainer}>
        <Image
          src={MyImage.src}
          fill
          style={{ objectFit: "cover" }}
          alt="Malik Elbadri"
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.header}>
          Hello, {"I'm "}
          <span>Malik.</span>
        </h1>
        <p className={styles.subtitle}>
          I am a <span>full stack web developer</span> specialized in building
          and maintaining beautiful and accessible websites using various
          technologies.
        </p>

        <button className={styles.button}>
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
