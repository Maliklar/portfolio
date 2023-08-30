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
export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      {/* <section className={styles.section2}>
        <h2>My Skills</h2>
        <ul>
          <SkillCircle src={javascript.src} title="JavaScript" />
          <SkillCircle src={typescript.src} title="TypeScript" />
          <SkillCircle src={sass.src} title="SASS" />
          <SkillCircle src={css.src} title="CSS" />
          <SkillCircle src={html.src} title="HTML" />
          <SkillCircle src={next.src} title="NextJs" />
          <SkillCircle src={react.src} title="ReactJs" />
          <SkillCircle src={git.src} title="Git" />
        </ul>
      </section> */}

      {/* <section className={styles.section3}>
        <h2>Examples</h2>
        <TextInput type="text" />
      </section> */}
    </main>
  );
}
