import SkillTag from "@/components/SkillTag";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { PiArrowSquareOut } from "react-icons/pi";
import Reveal from "@/components/Reveal";
import React from "react";
import { ProjectType } from "@/assets/data/projects";
type Props = { scrollPercent: number } & ProjectType &
  React.HtmlHTMLAttributes<HTMLDivElement>;
const ProjectCard = ({
  title,
  desktop,
  skills,
  gitHub,
  mobile,
  url,
  scrollPercent,
  description,
  className = "",
  ...props
}: Props) => {
  return (
    <section className={`${styles.projectCard} ${className}`} {...props}>
      <div className={styles.imagesContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={desktop}
            fill
            alt={title}
            style={{ objectFit: "contain" }}
          />
          <div
            className={styles.mobileImage}
            style={{
              transform: `translateY(-${scrollPercent / 1.5}%)`,
            }}
          >
            <Image
              src={mobile}
              fill
              alt={title}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <div className={styles.end}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.tagsContainer}>
          {skills.map(({ title, Icon }) => (
            <SkillTag Icon={Icon} key={title} title={title} />
          ))}
        </div>
        <p>{description}</p>
        <div className={styles.links}>
          {gitHub && (
            <Link className={styles.gitHub} href={gitHub}>
              GitHub <AiFillGithub />
            </Link>
          )}
          {url && (
            <Link className={styles.url} href={url}>
              Preview <PiArrowSquareOut />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
export default ProjectCard;
