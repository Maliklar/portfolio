"use client";

import css from "@/assets/images/logos/css.webp";
import git from "@/assets/images/logos/git.png";
import html from "@/assets/images/logos/html.png";
import javascript from "@/assets/images/logos/javascript.png";
import next from "@/assets/images/logos/next.png";
import react from "@/assets/images/logos/react.png";
import sass from "@/assets/images/logos/sass.png";
import typescript from "@/assets/images/logos/typescript.png";
import TextInput from "@/components/Inputs/TextInput";
import HeroSection from "@/components/Specific/Sections/HeroSection";
import SkillCircle from "@/components/Specific/SkillCircle";
import styles from "@/styles/pages/index.module.scss";
import Image from "next/image";
import AboutMe from "@/assets/images/about-me.jpg";
export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />

      <div className={styles.container}>
        <section className={styles.aboutMeSection}>
          <div className={styles.imageContainer} role="img" title="About Me">
            <Image
              src={AboutMe.src}
              fill
              style={{ objectFit: "cover" }}
              alt="About Me"
            />
          </div>
          <span className={styles.textContainer}>
            <h2>About Me</h2>
            <p>
              I am a frontend developer specialized in building beautiful,
              accessible, and responsive user interfaces for both mobile
              applications using React Native and websites using various
              technologies and frameworks.
              <br />I start working on web development in 2019 and since then{" "}
              {"I've"}
              been learning new things on a daily basis.
              <br />
              During these years I completed multiple courses related{" "}
              <strong> web </strong>
              development, <strong> mobile </strong> application development,{" "}
              <strong> SQL </strong> database, <strong> RESTful API </strong>,
              and others.
              <br />
            </p>
          </span>
        </section>

        <section className={styles.section3}>
          <h2>Examples</h2>
          <TextInput type="text" />
        </section>
      </div>
    </main>
  );
}
