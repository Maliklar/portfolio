import Reveal from "@/components/Reveal";
import SkillCircle from "../../SkillCircle";
import styles from "./index.module.scss";
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
import { useState } from "react";
import { FaCamera, FaCss3 } from "react-icons/fa";
import { IconType } from "react-icons";
import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoRedux,
  BiLogoSass,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVuejs,
} from "react-icons/bi";
import { SiPrisma, SiWebrtc } from "react-icons/si";

import { TbBrandSolidjs, TbBrandNextjs, TbBrandSvelte } from "react-icons/tb";

enum SkillCategory {
  Language,
  Framework,
  Tool,
}

type InitialSkillsType = {
  img: IconType;
  title: string;
  category: SkillCategory;
  shown: boolean;
  color?: string;
};

const initialSkills: InitialSkillsType[] = [
  {
    img: BiLogoCss3,
    title: "CSS",
    category: SkillCategory.Tool,
    color: "#3D9DD6",
    shown: true,
  },
  {
    img: BiLogoJavascript,
    title: "JavaScript",
    category: SkillCategory.Language,
    shown: true,
    color: "#E9AD22",
  },
  {
    img: BiLogoTypescript,
    title: "TypeScript",
    category: SkillCategory.Language,
    shown: true,
    color: "#306AF1",
  },
  {
    img: BiLogoHtml5,
    title: "HTML",
    category: SkillCategory.Language,
    shown: true,
    color: "#E6532D",
  },

  {
    img: TbBrandNextjs,
    title: "NextJs",
    category: SkillCategory.Framework,
    shown: true,
    color: "white",
  },
  {
    img: BiLogoReact,
    title: "ReactJS",
    category: SkillCategory.Framework,
    shown: true,
    color: "#61DBFB",
  },
  {
    img: BiLogoGit,
    title: "Git",
    category: SkillCategory.Tool,
    shown: true,
    color: "#E6532D",
  },
  {
    img: BiLogoSass,
    title: "SASS",
    category: SkillCategory.Tool,
    shown: true,
    color: "#DB679F",
  },
  {
    img: SiWebrtc,
    title: "WebRTC",
    category: SkillCategory.Tool,
    shown: true,
    color: "#61DBFB",
  },
  {
    img: BiLogoReact,
    title: "React Native",
    category: SkillCategory.Framework,
    shown: true,
    color: "#61DBFB",
  },
  {
    img: BiLogoVuejs,
    title: "VueJs",
    category: SkillCategory.Framework,
    shown: true,
    color: "#47BA87",
  },
  {
    img: TbBrandSolidjs,
    title: "SolidJs",
    category: SkillCategory.Framework,
    shown: true,
    color: "#5187C7",
  },
  {
    img: TbBrandSvelte,
    title: "Svelte",
    category: SkillCategory.Framework,
    shown: true,
    color: "#E6532D",
  },
  {
    img: BiLogoJava,
    title: "Java",
    category: SkillCategory.Language,
    shown: true,
  },
  {
    img: BiLogoPostgresql,
    title: "SQL",
    category: SkillCategory.Language,
    shown: true,
  },
  {
    img: BiLogoTailwindCss,
    title: "Tailwind",
    category: SkillCategory.Tool,
    shown: true,
  },
  {
    img: SiPrisma,
    title: "Prisma",
    category: SkillCategory.Tool,
    shown: true,
  },
  {
    img: BiLogoNodejs,
    title: "NodeJs",
    category: SkillCategory.Framework,
    shown: true,
  },
  {
    img: BiLogoRedux,
    title: "Redux",
    category: SkillCategory.Tool,
    shown: true,
  },
];
const SkillsSection = () => {
  const [skills, setSkills] = useState<InitialSkillsType[]>(initialSkills);
  const [currentFilter, setCurrentFilter] = useState<SkillCategory>();
  const filterChangeHandler = (filter?: SkillCategory) => {
    setCurrentFilter(filter);
    if (!filter) {
      setSkills([...initialSkills]);
      return;
    }

    skills.forEach((skill) => {
      if (skill.category === filter) {
        skill.shown = true;
      } else {
        skill.shown = false;
      }
    });
    setSkills([...skills]);
  };
  return (
    <section className={styles.skillsSection}>
      <h2>Skills</h2>
      <div className={styles.filters}>
        <span
          onClick={() => filterChangeHandler()}
          data-active={currentFilter === undefined}
        >
          All
        </span>
        <span
          onClick={() => filterChangeHandler(SkillCategory.Framework)}
          data-active={currentFilter === SkillCategory.Framework}
        >
          Frameworks
        </span>
        <span
          onClick={() => filterChangeHandler(SkillCategory.Language)}
          data-active={currentFilter === SkillCategory.Language}
        >
          Languages
        </span>
        <span
          onClick={() => filterChangeHandler(SkillCategory.Tool)}
          data-active={currentFilter === SkillCategory.Tool}
        >
          Tools
        </span>
      </div>

      <ul className={styles.skillsContainer}>
        {skills.map((skill) => {
          const directions = ["top", "right", "left", "bottom"];
          return (
            <Reveal
              key={skill.title}
              direction={
                directions[Math.floor(Math.random() * directions.length)] as
                  | "left"
                  | "right"
                  | "bottom"
                  | "top"
              }
            >
              <SkillCircle
                color="white"
                src={skill.img}
                title={skill.title}
                shown={skill.shown}
              />
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
};
export default SkillsSection;
