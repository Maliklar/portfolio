"use client";

import css from "@/assets/images/logos/css.webp";
import git from "@/assets/images/logos/git.png";
import html from "@/assets/images/logos/html.png";
import javascript from "@/assets/images/logos/javascript.png";
import next from "@/assets/images/logos/next.png";
import react from "@/assets/images/logos/react.png";
import sass from "@/assets/images/logos/sass.png";
import typescript from "@/assets/images/logos/typescript.png";
import solidjs from "@/assets/images/logos/solidjs.png";
import vuejs from "@/assets/images/logos/vuejs.png";
import redux from "@/assets/images/logos/redux.png";
import svelte from "@/assets/images/logos/svelte.png";
import sql from "@/assets/images/logos/sql.png";
import tailwind from "@/assets/images/logos/tailwind.webp";
import java from "@/assets/images/logos/java.png";
import webrtc from "@/assets/images/logos/webrtc.png";
import prisma from "@/assets/images/logos/prisma.webp";
import nodejs from "@/assets/images/logos/nodejs.jpg";
import TEST from "@/assets/images/projects/test.png";
import HeroSection from "@/components/Specific/Sections/HeroSection";
import SkillCircle from "@/components/Specific/SkillCircle";
import styles from "@/styles/pages/index.module.scss";
import Image from "next/image";
import AboutMe from "@/assets/images/about-me.jpg";
import { useState } from "react";
import SkillTag from "@/components/SkillTag";
import projects from "@/assets/data/projects";
import ProjectCard from "@/components/Cards/ProjectCard";
import { CSSTransition } from "react-transition-group";
enum SkillCategory {
  SoftSkill,
  Web,
  Mobile,
  Backend,
  Language,
}

type InitialSkillsType = {
  img: string;
  title: string;
  category: SkillCategory[];
  shown: boolean;
};
const initialSkills: InitialSkillsType[] = [
  { img: css.src, title: "CSS", category: [SkillCategory.Web], shown: true },
  {
    img: javascript.src,
    title: "JavaScript",
    category: [
      SkillCategory.Web,
      SkillCategory.Language,
      SkillCategory.Backend,
    ],
    shown: true,
  },
  {
    img: typescript.src,
    title: "TypeScript",
    category: [
      SkillCategory.Web,
      SkillCategory.Language,
      SkillCategory.Backend,
    ],
    shown: true,
  },
  { img: html.src, title: "HTML", category: [SkillCategory.Web], shown: true },

  {
    img: next.src,
    title: "NextJs",
    category: [SkillCategory.Web, SkillCategory.Backend],
    shown: true,
  },
  {
    img: react.src,
    title: "ReactJS",
    category: [SkillCategory.Web],
    shown: true,
  },
  { img: git.src, title: "Git", category: [SkillCategory.Web], shown: true },
  { img: sass.src, title: "SASS", category: [SkillCategory.Web], shown: true },
  {
    img: webrtc.src,
    title: "WebRTC",
    category: [SkillCategory.Web],
    shown: true,
  },
  {
    img: react.src,
    title: "React Native",
    category: [SkillCategory.Mobile],
    shown: true,
  },
  {
    img: vuejs.src,
    title: "VueJs",
    category: [SkillCategory.Web],
    shown: true,
  },
  {
    img: solidjs.src,
    title: "SolidJs",
    category: [SkillCategory.Web],
    shown: true,
  },
  {
    img: svelte.src,
    title: "Svelte",
    category: [SkillCategory.Web],
    shown: true,
  },
  {
    img: java.src,
    title: "Java",
    category: [SkillCategory.Language],
    shown: true,
  },
  {
    img: sql.src,
    title: "SQL",
    category: [SkillCategory.Backend],
    shown: true,
  },
  {
    img: tailwind.src,
    title: "Tailwind",
    category: [SkillCategory.Web],
    shown: true,
  },
  {
    img: prisma.src,
    title: "Prisma",
    category: [SkillCategory.Backend],
    shown: true,
  },
  {
    img: nodejs.src,
    title: "NodeJs",
    category: [SkillCategory.Backend],
    shown: true,
  },
  {
    img: redux.src,
    title: "Redux",
    category: [SkillCategory.Web],
    shown: true,
  },
];

export default function Home() {
  const [skills, setSkills] = useState(initialSkills);

  const [projectsFilter, setProjectsFilter] = useState(projects);

  const [filter, setFilter] = useState(0);

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

        {/* ________________________________________________________________________________________________________________________________ */}

        <section className={styles.skillsSection}>
          <h2>Skills</h2>

          <ul className={styles.skillsContainer}>
            {skills.map((skill) => (
              <SkillCircle
                key={skill.title}
                src={skill.img}
                title={skill.title}
                shown={skill.shown}
              />
            ))}
          </ul>
        </section>

        {/* ________________________________________________________________________________________________________________________________ */}

        <section className={styles.projectsSection}>
          <h2>Projects</h2>
          <div className={styles.filters}>
            <span data-state={filter === 0} onClick={() => setFilter(0)}>
              NextJs
            </span>
            <span data-state={filter === 1} onClick={() => setFilter(1)}>
              ReactJs
            </span>
            <span data-state={filter === 2} onClick={() => setFilter(2)}>
              VueJs
            </span>
            <span data-state={filter === 3} onClick={() => setFilter(3)}>
              Vanilla
            </span>
            <span data-state={filter === 4} onClick={() => setFilter(4)}>
              Mobile
            </span>
          </div>
          <div className={styles.content}>
            {projects.map((project) => (
              <ProjectCard {...project} key={project.title} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
