"use client";
import Image from "next/image";
import styles from "@/styles/pages/index.module.scss";
import Malik from "@/assets/images/malik.png";
import Button from "@/components/Buttons/Button";
import { FaChevronDown } from "react-icons/fa";
import SkillCircle from "@/components/Specific/SkillCircle";
import javascript from "@/assets/images/logos/javascript.png";
import typescript from "@/assets/images/logos/typescript.png";
import sass from "@/assets/images/logos/sass.png";
import css from "@/assets/images/logos/css.webp";
import html from "@/assets/images/logos/html.png";
import next from "@/assets/images/logos/next.png";
import git from "@/assets/images/logos/git.png";
import react from "@/assets/images/logos/react.png";
import TextInput from "@/components/Inputs/TextInput";
import useUIContext from "@/contexts/UIContext/useUIContext";
export default function Home() {
  const context = useUIContext();

  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <h2>Hello There</h2>
        <p>My name is Malik Elbadri, I am a passionate frontend developer</p>
        <p>
          This website is intended to demonstrate the skills and use frontend
          tools to create an amazing user interfaces
        </p>
        <p>
          The UI in this website is completely designed by me and I didn't use
          any UI libraries such as MUI or Tailwind <br />
          This is intentional to demonstrate styling skills
        </p>
        <Button
          iconPosition="end"
          Icon={FaChevronDown}
          onClick={() => {
            context.switchTheme();
          }}
        >
          Scroll Down to start
        </Button>
      </section>

      <section className={styles.section2}>
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
      </section>

      <section className={styles.section3}>
        <h2>Examples</h2>
        <TextInput type="text" />
      </section>
    </main>
  );
}
