import ProjectCard from "@/components/Cards/ProjectCard";
import styles from "./index.module.scss";
import projects from "@/assets/data/projects2";
import ProjectViewer from "@/components/Cards/ProjectViewer";
import Section from "..";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink, FaShare } from "react-icons/fa";

const ProjectsSection = () => {
  return (
    <Section title="Projects">
      <div className={styles.container}>
        {projects.map((p) => (
          <div key={p.title} className={styles.projectContainer}>
            <h3>{p.title}</h3>
            <div className={styles.skillsContainer}>
              {p.skills.map(({ title, Icon }) => (
                <span key={title} className={styles.skill} title={title}>
                  <Icon />
                </span>
              ))}
            </div>
            <div className={styles.imagesContainer}>
              <div className={styles.desktop}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
                <div className={styles.mobile}>
                  <Image
                    src={p.images.mobile}
                    alt={p.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>

            <p>{p.description}</p>

            <div className={styles.links}>
              {p.gitHub && (
                <Link href="#" className={styles.link}>
                  GitHub
                  <FaGithub />
                </Link>
              )}
              {p.url && (
                <Link href="#" className={styles.link}>
                  Visit <FaLink />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default ProjectsSection;
