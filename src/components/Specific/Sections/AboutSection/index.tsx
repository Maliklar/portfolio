import { AiOutlineDownload } from "react-icons/ai";
import { FaBook, FaChrome, FaMobile } from "react-icons/fa";
import Section from "..";
import styles from "./index.module.scss";
import { TbWorldWww } from "react-icons/tb";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const hRef1 = useRef(null);
  const hRef2 = useRef(null);
  const hRef3 = useRef(null);

  const isInView1 = useInView(hRef1, { once: true });
  const isInView2 = useInView(hRef2, { once: true });
  const isInView3 = useInView(hRef3, { once: true });
  return (
    <Section title="About Me">
      <div className={styles.content}>
        <motion.div
          className={`${styles.card} ${styles.web}`}
          ref={hRef1}
          style={{
            transform: isInView3 ? "none" : "translateX(-100%)",
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
          }}
        >
          <motion.h3
            style={{
              transform: isInView1 ? "none" : "translateY(100%)",
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
            }}
          >
            <TbWorldWww fontSize="1.5em" /> Web Developer
          </motion.h3>
          <p>
            An enthusiastic web developer with more than 2 years of professional
            experience building websites that are accessible and search engine
            optimized with various technologies and tools like ReactJs, Redux,
            NextJs, VueJs and others.
            <br />
          </p>
        </motion.div>
        <motion.div
          className={`${styles.card} ${styles.mobile}`}
          ref={hRef2}
          style={{
            transform: isInView3 ? "none" : "translateY(100%)",
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
          }}
        >
          <motion.h3
            style={{
              transform: isInView2 ? "none" : "translateY(100%)",
              transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
            }}
          >
            <FaMobile fontSize="1.5em" /> Mobile Developer
          </motion.h3>
          <p>
            I recently started looking into mobile development and prepared a
            plant to start learn mobile development starting with a popular
            cross-platform framework and working may way to build a real mobile
            applications with advanced features.
          </p>
        </motion.div>
        <motion.div
          ref={hRef3}
          className={`${styles.card} ${styles.human}`}
          style={{
            transform: isInView3 ? "none" : "translateY(100%)",
            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
          }}
        >
          <motion.h3
            style={{
              transform: isInView3 ? "none" : "translateX(100%)",
              transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
            }}
          >
            <FaBook fontSize="1.5em" /> Learner
          </motion.h3>
          <p>
            As someone working the tech industry and always learning new things
            and improving my skills on a daily-basis. <br />I am also open to
            learn new technologies and techniques that help improve the general
            development experience for me and my team as well.
          </p>
        </motion.div>
        <div className={`${styles.card} ${styles.cv}`}>
          <h3>
            <AiOutlineDownload /> Download My CV
          </h3>
        </div>
      </div>
    </Section>
  );
};
export default AboutSection;
