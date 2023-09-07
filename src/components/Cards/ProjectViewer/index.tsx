import { UIEvent, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import initialProjects, { ProjectType } from "@/assets/data/projects2";
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

  useEffect(() => {
    function scrollHandler() {
      if (!sectionRef.current) return;

      const { top } = sectionRef.current.getBoundingClientRect();
      if (top >= 0) return;

      const elementsHeight = innerHeight * projects.length;
      const currentScroll = Math.abs(top) + innerHeight;
      if (currentScroll > elementsHeight) return;
      const activeIndex =
        Math.round((currentScroll / elementsHeight) * projects.length) - 1;

      const newActiveProject = projects[activeIndex];
      if (activeProject && newActiveProject !== activeProject) {
        setActiveProject(newActiveProject);
        projects.forEach((p, i) => {
          p.state = "inactive";
          if (i === activeIndex - 1) p.state = "top";
          if (i === activeIndex + 1) p.state = "bottom";
          if (i === activeIndex) p.state = "active";
        });
        setProjects([...projects]);
      }
    }

    addEventListener("scroll", scrollHandler);

    return () => {
      removeEventListener("scroll", scrollHandler);
    };
  }, [activeProject]);

  const moveToSlide = (index: number) => {
    if (!sectionRef.current) return;
    const rec = sectionRef.current.getBoundingClientRect();

    scrollTo({
      top:
        Math.abs(rec.y + scrollY) + index * innerHeight + (index === 0 ? 1 : 0),
    });
  };
  return (
    <div
      ref={sectionRef}
      tabIndex={0}
      className={styles.scrollContainer}
      style={{
        minHeight: `${projects.length * 100}dvh`,
      }}
    >
      <div className={styles.container}>
        <div className={styles.sliderContainer}>
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
            <section className={styles.content}>
              <h3 className={styles.title}>{activeProject.title}</h3>
              <p className={styles.description}>{activeProject.description}</p>
              <div className={styles.skillsContainer}>
                {activeProject.skills.map(({ title, Icon }) => (
                  <div className={styles.skillIcon} title={title} key={title}>
                    <Icon />
                  </div>
                ))}
              </div>
            </section>
          )}
          <div className={styles.sliderProgress}>
            {projects.map((i, index) => (
              <div
                key={i.title}
                data-active={i.state === "active"}
                onClick={() => moveToSlide(index)}
                className={styles.dot}
              ></div>
            ))}
          </div>
        </div>

        <div className={styles.backgroundContainer}>
          <div className={styles.shadow} />
          {projects.map((p) => (
            <Image
              className={styles.img}
              data-state={p.state}
              key={p.title}
              src={p.image}
              alt={p.title}
              fill
              style={{ objectFit: "cover" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectViewer;
