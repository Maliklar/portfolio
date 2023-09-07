import SkillTag from "@/components/SkillTag";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { PiArrowSquareOut } from "react-icons/pi";
import Reveal from "@/components/Reveal";
import React from "react";
import { ProjectType } from "@/assets/data/projects2";
type Props = ProjectType & React.HtmlHTMLAttributes<HTMLDivElement>;
const ProjectCard = ({
  title,
  image,
  skills,
  gitHub,
  images,
  url,
  description,
  className = "",
  ...props
}: Props) => {
  return (
    <div className={`${styles.projectCard} ${className}`} {...props}>
      <strong className={styles.title}>{title}</strong>
      <div className={styles.tagsContainer}>
        {skills.map(({ title, Icon }) => (
          <SkillTag Icon={Icon} key={title} title={title} />
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
      <div className={styles.imagesContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={images.main}
            fill
            alt={title}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={images.mobile}
            fill
            alt={title}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
