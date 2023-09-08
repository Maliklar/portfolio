import { skills, SkillType } from "./skills";
import IpAddressMain from "@/assets/images/projects2/IPTracker/main.png";
import IpAddressMobile from "@/assets/images/projects2/IPTracker/mobile.png";

import LoopStudiosMain from "@/assets/images/projects2/LoopStudios/desktop.png";
import LoopStudiosMobile from "@/assets/images/projects2/LoopStudios/mobile.png";

import SpaceTourismMain from "@/assets/images/projects2/SpaceTourism/desktop.png";
import SpaceTourismMobile from "@/assets/images/projects2/SpaceTourism/mobile.png";

import EatlyMain from "@/assets/images/projects2/Eatly/desktop.png";
import EatlyMobile from "@/assets/images/projects2/Eatly/mobile.png";

import SpaceXMain from "@/assets/images/projects2/spacex/desktop.png";
import SpaceXMobile from "@/assets/images/projects2/spacex/mobile.png";

import CountriesMain from "@/assets/images/projects2/flags/desktop.png";
import CountriesMobile from "@/assets/images/projects2/flags/mobile.png";

export enum ProjectTypeEnum {
  Web,
  Mobile,
}

export type ProjectType = {
  title: string;
  description: string;
  skills: SkillType[];
  desktop: string;
  mobile: string;
  gitHub: string;
  url: string;
  store?: string;
  projectType: ProjectTypeEnum;
  state?: "active" | "inactive" | "top" | "bottom";
};

const IpTracker: ProjectType = {
  title: "IP Address Tracker",
  projectType: ProjectTypeEnum.Web,
  description: `A part of a frontend mentor UI challenge. \n The website uses external API to make a lookup for the geolocation of a specific IP address and display it on a map.`,
  skills: [skills.JavaScript, skills.CSS, skills.HTML],
  desktop: IpAddressMain.src,
  mobile: IpAddressMobile.src,
  gitHub: "https://github.com/Maliklar/ip-address-tracker-master",
  url: "https://maliklar.github.io/ip-address-tracker-master/",
};

const LoopStudios: ProjectType = {
  title: "Loop Studios",
  projectType: ProjectTypeEnum.Web,
  description: `A part of a frontend mentor UI challenge. \n A concept landing page for a company called Loop Studios with a beautiful and responsive user interface`,
  skills: [skills.JavaScript, skills.CSS, skills.HTML],
  desktop: LoopStudiosMain.src,
  mobile: LoopStudiosMobile.src,
  gitHub: "https://github.com/Maliklar/loopstudios-landing-page-main",
  url: "https://maliklar.github.io/loopstudios-landing-page-main/",
};

const SpaceTourism: ProjectType = {
  title: "Space Tourism",
  projectType: ProjectTypeEnum.Web,
  description: `A part of a frontend mentor UI challenge. \n A concept of a futuristic website that allow people to book a flight into space`,
  skills: [skills.JavaScript, skills.CSS, skills.VueJs],
  desktop: SpaceTourismMain.src,
  mobile: SpaceTourismMobile.src,
  gitHub: "https://github.com/Maliklar/space-tourism-website",
  url: "https://maliklar.github.io/space-tourism-website/",
};

const Eatly: ProjectType = {
  title: "Eatly",
  projectType: ProjectTypeEnum.Web,
  description: `A concept website for a resturant`,
  skills: [skills.NextJs, skills.TypeScript, skills.SQL],
  desktop: EatlyMain.src,
  mobile: EatlyMobile.src,
  gitHub: "https://github.com/Maliklar/space-tourism-website",
  url: "https://mae-ndo8ivo95-maliklar.vercel.app/",
};

const SpaceXClone: ProjectType = {
  title: "SpaceX Clone",
  projectType: ProjectTypeEnum.Web,
  description: `An clone of SpaceX website`,
  skills: [skills.JavaScript, skills.TypeScript, skills.CSS],
  desktop: SpaceXMain.src,
  mobile: SpaceXMobile.src,
  gitHub: "https://github.com/Maliklar/space-tourism-website",
  url: "https://mae-ndo8ivo95-maliklar.vercel.app/",
};

const CountryBorders: ProjectType = {
  title: "Bordering Country",
  projectType: ProjectTypeEnum.Web,
  description: `A part of a frontend mentor UI challenge. \n A website where users can lookup for a country to see some information about it in addition to its bordering countries`,
  skills: [skills.VueJs, skills.JavaScript, skills.CSS],
  desktop: CountriesMain.src,
  mobile: CountriesMobile.src,
  gitHub: "https://github.com/Maliklar/space-tourism-website",
  url: "https://mae-ndo8ivo95-maliklar.vercel.app/",
};

const Projects = [
  SpaceXClone,
  Eatly,
  LoopStudios,
  SpaceTourism,
  CountryBorders,
  IpTracker,
];
export default Projects;
