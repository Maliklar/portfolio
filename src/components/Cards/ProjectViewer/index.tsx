import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import initialProjects from "@/assets/data/projects";
import ProjectCard from "../ProjectCard";
import Image from "next/image";

initialProjects.forEach((p, i) => {
  p.state = "inactive";
  if (i === 0) p.state = "active";
  if (i === 1) p.state = "bottom";
});

const ProjectViewer = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [activeProject, setActiveProject] = useState(initialProjects[0]);
  //   useEffect(() => {
  //     const active = projects.find((p) => p.state === "active");
  //     if (active) setActiveProject(active);
  //   }, [projects]);

  const [animation, setAnimation] = useState("stop");
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
  return (
    <div className={styles.container}>
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
              <h3>{activeProject.title}</h3>
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
