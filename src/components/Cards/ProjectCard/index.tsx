import SkillTag from "@/components/SkillTag";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { PiArrowSquareOut } from "react-icons/pi";
import Reveal from "@/components/Reveal";
import React from "react";
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
  className?: string;
  state?: "active" | "top" | "bottom" | "inactive";
} & React.HtmlHTMLAttributes<HTMLDivElement>;
const ProjectCard = ({
  title,
  src,
  skills,
  gitHub,
  url,

  description,
  className = "",
  ...props
}: Props) => {
  return (
    <div className={`${styles.projectCard} ${className}`} {...props}>
      <strong className={styles.title}>{title}</strong>
      <div className={styles.imageContainer}>
        <Image src={src} fill alt={title} style={{ objectFit: "cover" }} />
      </div>

      <div className={styles.content}>
        <div className={styles.tagsContainer}>
          {skills.map(({ title, color }) => (
            <SkillTag key={title} title={title} color={color} />
          ))}
        </div>

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
      </div>
    </div>
  );
};
export default ProjectCard;
