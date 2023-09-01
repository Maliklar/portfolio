import SkillTag from "@/components/SkillTag";
import styles from "./index.module.scss";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  description: string;
  skills: {
    title: string;
    color: string;
  }[];
};
const ProjectCard = ({ title, src, skills, description }: Props) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <Image src={src} fill alt={title} style={{ objectFit: "cover" }} />
        <div />
      </div>

      <div className={styles.content}>
        <strong className={styles.title}>{title}</strong>
        <div className={styles.tagsContainer}>
          {skills.map(({ title, color }) => (
            <SkillTag key={title} title={title} color={color} />
          ))}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default ProjectCard;
