"use client";

import projects from "@/assets/data/projects";
import ProjectCard from "@/components/Cards/ProjectCard";
import AboutSection from "@/components/Specific/Sections/AboutSection";
import HeroSection from "@/components/Specific/Sections/HeroSection";
import SkillsSection from "@/components/Specific/Sections/SkillsSection";
import styles from "@/styles/pages/index.module.scss";
import { useState } from "react";

export default function Home() {
  const [projectsFilter, setProjectsFilter] = useState(projects);

  const [filter, setFilter] = useState(0);

  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />

      <section className={styles.projectsSection}>
        <h2>Projects</h2>
        {/* <div className={styles.filters}>
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
          </div> */}
        <div className={styles.content}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
