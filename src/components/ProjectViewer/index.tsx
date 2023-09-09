import { ProjectType } from "@/assets/data/projects";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { PiArrowSquareOut } from "react-icons/pi";
import SkillCircle from "../Specific/SkillCircle";
import styles from "./index.module.scss";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

type Props = ProjectType & {
  direction: boolean;
};
const ProjectViewer = ({
  title,
  description,
  gitHub,
  url,
  desktop,
  mobile,
  skills,
  direction,
  projectType,
}: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });

  const y = useParallax(scrollYProgress, 100);
  const x = useParallax(scrollYProgress, 50);
  const rotate = useParallax(scrollYProgress, 10);

  return (
    <section className={styles.container} data-direction={direction}>
      <div className={styles.start} ref={sectionRef}>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className={styles.skills}>
          {skills.map((skill) => (
            <SkillCircle
              key={skill.title}
              title={skill.title}
              src={skill.Icon}
            />
          ))}
        </div>

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
      <motion.div className={styles.end} style={{ y }}>
        <motion.div className={styles.desktop}>
          <Image
            src={desktop}
            alt={title}
            fill
            style={{ objectFit: "contain" }}
          />
          <motion.div className={styles.mobile} style={{ y: x, rotate }}>
            <Image
              src={mobile}
              alt={title}
              fill
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default ProjectViewer;
