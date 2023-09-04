import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import initialProjects from "@/assets/data/projects";
import ProjectCard from "../ProjectCard";
import Image from "next/image";
import SkillCircle from "@/components/Specific/SkillCircle";
import { FaReact } from "react-icons/fa";

initialProjects.forEach((p, i) => {
  p.state = "inactive";
  if (i === 0) p.state = "active";
  if (i === 1) p.state = "bottom";
});

const ProjectViewer = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [activeProject, setActiveProject] = useState(initialProjects[0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  //   useEffect(() => {
  //     const active = projects.find((p) => p.state === "active");
  //     if (active) setActiveProject(active);
  //   }, [projects]);

  const [animation, setAnimation] = useState("stop");

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    function wheelHandler(e: WheelEvent) {
      if (!sectionRef.current) return;
      const { top, bottom } = sectionRef.current.getBoundingClientRect();

      const isCompletelyVisible = Math.abs(bottom - innerHeight) <= 1;

      if (isCompletelyVisible)
        if (e.deltaY >= 125) {
          bottomHandler();
        } else {
          if (activeProject === projects[0]) return;
          e.preventDefault();
          e.stopPropagation();
          topHandler();
        }
    }

    addEventListener("wheel", wheelHandler, { passive: false });

    return () => {
      removeEventListener("wheel", wheelHandler);
    };
  }, [activeProject]);

  const bottomHandler = () => {
    setAnimation("bottom");

    let activeIndex = projects.findIndex((p) => p.state === "active") + 1;
    if (activeIndex >= projects.length) {
      activeIndex = 0;
    }
    setActiveProject(projects[activeIndex]);

    projects.forEach((p, i) => {
      p.state = "inactive";
      if (i === activeIndex - 1) {
        p.state = "top";
      }
      if (i === activeIndex + 1) {
        p.state = "bottom";
      }
      if (i === activeIndex) p.state = "active";
    });

    setProjects([...projects]);
  };
  const topHandler = () => {
    setAnimation("bottom");

    let activeIndex = projects.findIndex((p) => p.state === "active") - 1;
    if (activeIndex < 0) {
      activeIndex = projects.length - 1;
    }
    setActiveProject(projects[activeIndex]);

    projects.forEach((p, i) => {
      p.state = "inactive";
      if (i === activeIndex - 1) {
        p.state = "top";
      }
      if (i === activeIndex + 1) {
        p.state = "bottom";
      }
      if (i === activeIndex) p.state = "active";
    });

    setProjects([...projects]);
  };
  return (
    <div className={styles.container} ref={sectionRef}>
      <div className={styles.sliderContainer} data-animation={animation}>
        {projects.map((p) => {
          return (
            <ProjectCard
              key={p.title}
              {...p}
              className={styles.card}
              data-state={p.state}
            />
          );
        })}
      </div>

      <div className={styles.slideContent}>
        {activeProject && (
          <>
            <section className={styles.content}>
              <h3 className={styles.title}>{activeProject.title}</h3>
              <p className={styles.description}>{activeProject.description}</p>
              <ul className={styles.techUsed}>
                <SkillCircle
                  title="React Native"
                  src={FaReact}
                  color="red"
                  shown
                />
                <SkillCircle title="React Native" src={FaReact} />
                <SkillCircle title="React Native" src={FaReact} />
                <SkillCircle title="React Native" src={FaReact} />
              </ul>

              <button onClick={bottomHandler}>CLICK ME</button>
            </section>
          </>
        )}
      </div>
      <div className={styles.backgroundContainer}>
        <div className={styles.shadow} />
        {projects.map((p) => (
          <Image
            className={styles.img}
            data-state={p.state}
            key={p.title}
            src={p.src}
            alt={p.title}
            fill
            style={{ objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectViewer;
