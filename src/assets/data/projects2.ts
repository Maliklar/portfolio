import { skills, SkillType } from "./skills";
import IpAddressMain from "@/assets/images/projects2/IpAdressTracker/main.png";
import IpAddressMobile from "@/assets/images/projects2/IpAdressTracker/mobile.png";
import IpAddressTable from "@/assets/images/projects2/IpAdressTracker/tablet.png";

import NotificationPageMain from "@/assets/images/projects2/NotificationsPage/main.png";
import NotificationPageMobile from "@/assets/images/projects2/NotificationsPage/mobile.png";
import NotificationPageTablet from "@/assets/images/projects2/NotificationsPage/tablet.png";

import LoopStudiosMain from "@/assets/images/projects2/LoopStudios/main.png";
import LoopStudiosMobile from "@/assets/images/projects2/LoopStudios/mobile.png";
import LoopStudiosTablet from "@/assets/images/projects2/LoopStudios/tablet.png";

import SpaceTourismMain from "@/assets/images/projects2/SpaceTourism/main.png";
import SpaceTourismMobile from "@/assets/images/projects2/SpaceTourism/mobile.png";
import SpaceTourismTablet from "@/assets/images/projects2/SpaceTourism/tablet.png";

import EatlyMain from "@/assets/images/projects2/Eatly/main.png";
import EatlyMobile from "@/assets/images/projects2/Eatly/mobile.png";
import EatlyTablet from "@/assets/images/projects2/Eatly/tablet.png";

export enum ProjectTypeEnum {
  Web,
  Mobile,
}

export type ProjectType = {
  title: string;
  description: string;
  skills: SkillType[];
  image: string;
  images: {
    main: string;
    tablet: string;
    mobile: string;
  };
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
  image: IpAddressMain.src,
  images: {
    main: IpAddressMain.src,
    tablet: IpAddressTable.src,
    mobile: IpAddressMobile.src,
  },
  gitHub: "https://github.com/Maliklar/ip-address-tracker-master",
  url: "https://maliklar.github.io/ip-address-tracker-master/",
};

const NotificationPage: ProjectType = {
  title: "Notification Page",
  projectType: ProjectTypeEnum.Web,
  description: `A part of a frontend mentor UI challenge. \n A simple notification page with a beautify and responsive user interface`,
  skills: [skills.JavaScript, skills.CSS, skills.HTML],
  image: NotificationPageMain.src,
  images: {
    main: NotificationPageMain.src,
    tablet: NotificationPageTablet.src,
    mobile: NotificationPageMobile.src,
  },
  gitHub: "https://github.com/Maliklar/notifications-page-main",
  url: "https://maliklar.github.io/notifications-page-main/",
};

const LoopStudios: ProjectType = {
  title: "Loop Studios",
  projectType: ProjectTypeEnum.Web,
  description: `A part of a frontend mentor UI challenge. \n A concept landing page for a company called Loop Studios with a beautiful and responsive user interface`,
  skills: [skills.JavaScript, skills.CSS, skills.HTML],
  image: LoopStudiosMain.src,
  images: {
    main: LoopStudiosMain.src,
    tablet: LoopStudiosMobile.src,
    mobile: LoopStudiosTablet.src,
  },
  gitHub: "https://github.com/Maliklar/loopstudios-landing-page-main",
  url: "https://maliklar.github.io/loopstudios-landing-page-main/",
};

const SpaceTourism: ProjectType = {
  title: "Space Tourism",
  projectType: ProjectTypeEnum.Web,
  description: `A part of a frontend mentor UI challenge. \n A concept of a futuristic website that allow people to book a flight into space`,
  skills: [skills.JavaScript, skills.CSS, skills.VueJs],
  image: SpaceTourismMain.src,
  images: {
    main: SpaceTourismMain.src,
    tablet: SpaceTourismMobile.src,
    mobile: SpaceTourismTablet.src,
  },
  gitHub: "https://github.com/Maliklar/space-tourism-website",
  url: "https://maliklar.github.io/space-tourism-website/",
};

const Eatly: ProjectType = {
  title: "Eatly",
  projectType: ProjectTypeEnum.Web,
  description: `A concept website for a resturant`,
  skills: [skills.NextJs, skills.TypeScript, skills.SQL],
  image: EatlyMain.src,
  images: {
    main: EatlyMain.src,
    tablet: EatlyMobile.src,
    mobile: EatlyTablet.src,
  },
  gitHub: "https://github.com/Maliklar/space-tourism-website",
  url: "https://mae-ndo8ivo95-maliklar.vercel.app/",
};

const Projects = [
  IpTracker,
  Eatly,
  SpaceTourism,
  LoopStudios,
  NotificationPage,
];
export default Projects;
