"use client";

import AboutSection from "@/components/Specific/Sections/AboutSection";
import HeroSection from "@/components/Specific/Sections/HeroSection";
import ProjectsSection from "@/components/Specific/Sections/ProjectsSection";
import SkillsSection from "@/components/Specific/Sections/SkillsSection";
import styles from "@/styles/pages/index.module.scss";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState(0);

  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />

      <div
        style={{
          minHeight: "200vh",
        }}
      />
    </main>
  );
}
