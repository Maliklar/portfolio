import SkillTag from "@/components/SkillTag";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { PiArrowSquareOut } from "react-icons/pi";
import Reveal from "@/components/Reveal";
type Props = {
  title: string;
  src: string;
  description: string;
  url?: string;
  gitHub?: string;
  skills: {
    title: string;
    color: string;
  }[];
};
const ProjectCard = ({
  title,
  src,
  skills,
  gitHub,
  url,
  description,
}: Props) => {
  return (
    <Reveal className={styles.projectCard}>
      <Reveal className={styles.imageContainer}>
        <Image src={src} fill alt={title} style={{ objectFit: "cover" }} />
      </Reveal>

      <strong className={styles.title}>{title}</strong>
      <div className={styles.tagsContainer}>
        {skills.map(({ title, color }) => (
          <SkillTag key={title} title={title} color={color} />
        ))}
      </div>
      <p>{description}</p>

      <div className={styles.footer}>
        {gitHub && (
          <Link className={styles.gitHub} href={gitHub}>
            GitHub <AiFillGithub fontSize="1rem" />
          </Link>
        )}
        {url && (
          <Link className={styles.url} href={url}>
            Preview <PiArrowSquareOut fontSize="1rem" />
          </Link>
        )}
      </div>
    </Reveal>
  );
};
export default ProjectCard;
