import ProjectCard from "@/components/Cards/ProjectCard";
import styles from "./index.module.scss";
import projects from "@/assets/data/projects";
import ProjectViewer from "@/components/Cards/ProjectViewer";

const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection}>
      <h2>Projects</h2>

      <div className={styles.content}>
        {/* {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))} */}

        <ProjectViewer />
      </div>
    </section>
  );
};
export default ProjectsSection;
