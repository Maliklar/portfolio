import { useRef } from "react";
import styles from "./index.module.scss";
import { motion, useInView } from "framer-motion";
type Props = {
  title: string;
  children: JSX.Element;
};
const Section = ({ title, children }: Props) => {
  const eRef = useRef(null);
  const isInView = useInView(eRef, { once: true });

  return (
    <section className={styles.container}>
      <motion.h2
        id={title}
        className={styles.title}
        ref={eRef}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
};
export default Section;
