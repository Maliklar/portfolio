import { IconType } from "react-icons";
import { FaGit, FaJava, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPrisma,
  SiRedux,
  SiSass,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandSolidjs,
  TbSql,
} from "react-icons/tb";

export type SkillType = {
  title: string;
  Icon: IconType;
};

export const skills = {
  React: {
    title: "React",
    Icon: FaReact,
  },
  NextJs: {
    title: "NextJs",
    Icon: TbBrandNextjs,
  },
  ReactNative: {
    title: "React Native",
    Icon: TbBrandReactNative,
  },
  Prisma: {
    title: "Prisma",
    Icon: SiPrisma,
  },
  webRtc: {
    title: "webRTC",
    Icon: SiWebrtc,
  },
  Java: {
    title: "Java",
    Icon: FaJava,
  },
  JavaScript: {
    title: "JavaScript",
    Icon: SiJavascript,
  },
  TypeScript: {
    title: "TypeScript",
    Icon: SiTypescript,
  },
  CSS: {
    title: "CSS",
    Icon: SiCss3,
  },

  SASS: {
    title: "SASS",
    Icon: SiSass,
  },
  HTML: {
    title: "HTML",
    Icon: SiHtml5,
  },
  VueJs: {
    title: "VueJs",
    Icon: FaVuejs,
  },
  Svelte: {
    title: "Svelte",
    Icon: SiSvelte,
  },
  SolidJs: {
    title: "SolidJs",
    Icon: TbBrandSolidjs,
  },
  Redux: {
    title: "Redux",
    Icon: SiRedux,
  },
  NodeJs: {
    title: "NodeJs",
    Icon: FaNodeJs,
  },
  SQL: {
    title: "SQL",
    Icon: TbSql,
  },
  Tailwind: {
    title: "Tailwind",
    Icon: SiTailwindcss,
  },
  Git: {
    title: "Git",
    Icon: FaGit,
  },
};
