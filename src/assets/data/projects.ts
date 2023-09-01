import IPAddressTracker from "@/assets/images/projects/ip-address-tracker.png";
import SpaceTourism from "@/assets/images/projects/space-tourism-website.png";
import CountriesApi from "@/assets/images/projects/countries-api.png";
import LoopStudios from "@/assets/images/projects/Frontend-Mentor-Loopstudios-landing-page.png";
import TimeTracker from "@/assets/images/projects/time-tracking-dashboard-main.png";
import RoomPage from "@/assets/images/projects/Frontend-Mentor-Room-homepage.png";
import SpaceX from "@/assets/images/projects/SpaceX.png";
import Eatly from "@/assets/images/projects/eatly.png";
const skills = {
  JavaScript: {
    title: "JavaScript",
    color: "yellow",
  },
  HTML: {
    title: "HTML",
    color: "orange",
  },
  CSS: {
    title: "CSS",
    color: "#add8e6",
  },
  TypeScript: {
    title: "TypeScript",
    color: "#007acc",
  },
  VueJs: {
    title: "VueJs",
    color: "green",
  },
  PWA: {
    title: "PWA",
    color: "pink",
  },
  NextJs: {
    title: "NextJs",
    color: "White",
  },
} as const;

const projects = [
  {
    title: "IP Address Tracker",
    src: IPAddressTracker.src,
    description: "Get the current location based on the IP address.",
    skills: [skills.CSS, skills.JavaScript, skills.HTML],
    url: "https://maliklar.github.io/rest-countries-api-with-color-theme-switcher-master/",
    gitHub: "",
  },
  {
    title: "Space Tourism",
    src: SpaceTourism.src,
    description: "A concept website allows people to book a flight to space.",
    skills: [skills.VueJs, skills.PWA],
    url: "https://maliklar.github.io/rest-countries-api-with-color-theme-switcher-master/",
    gitHub: "",
  },
  {
    title: "Countries Borders",
    src: CountriesApi.src,
    description:
      "A website that allow users to search for their country and check bordered countries",
    skills: [skills.VueJs, skills.PWA],
    url: "https://maliklar.github.io/rest-countries-api-with-color-theme-switcher-master/",
    gitHub: "",
  },
  {
    title: "LoopStudios",
    src: LoopStudios.src,
    description: "LoopStudios Landing page",
    skills: [skills.JavaScript, skills.HTML, skills.CSS],
    url: "https://maliklar.github.io/loopstudios-landing-page-main/",
    gitHub: "",
  },
  {
    title: "Time Tracker",
    src: TimeTracker.src,
    description: "Single page that allows users to track daily events",
    skills: [skills.JavaScript, skills.HTML, skills.CSS],
    url: "https://maliklar.github.io/time-tracking-dashboard-main/",
    gitHub: "",
  },
  {
    title: "Furniture Page",
    src: RoomPage.src,
    description: "Single page shows furniture",
    skills: [skills.JavaScript, skills.HTML, skills.CSS],
    url: "https://maliklar.github.io/room-homepage-master/",
    gitHub: "https://maliklar.github.io/room-homepage-master/",
  },
  {
    title: "SpaceX Landing Clone",
    src: SpaceX.src,
    description: "Clone of SpaceX website",
    skills: [skills.JavaScript, skills.HTML, skills.CSS],
    url: "https://maliklar.github.io/room-homepage-master/",
    gitHub: "https://maliklar.github.io/room-homepage-master/",
  },
  {
    title: "Eatly Landing Page",
    src: Eatly.src,
    description: "Landing page for Eatly",
    skills: [skills.NextJs, skills.TypeScript],
    url: "https://mae-ndo8ivo95-maliklar.vercel.app/",
    gitHub: "https://maliklar.github.io/room-homepage-master/",
  },
];

export default projects;
