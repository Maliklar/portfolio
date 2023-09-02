import Reveal from "@/components/Reveal";
import styles from "./index.module.scss";
import Image from "next/image";
import AboutMe from "@/assets/images/about-me.jpg";
import { FaAndroid, FaBook, FaChrome, FaMobile } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className={styles.aboutMeSection}>
      <div className={styles.textContainer}>
        <h2>About Me</h2>

        <div className={styles.content}>
          <Reveal
            direction={"right"}
            className={`${styles.card} ${styles.web}`}
          >
            <h3>
              {" "}
              <FaChrome /> Web Developer
            </h3>
            <p>
              An enthusiastic web developer with more than 2 years of
              professional experience building websites that are accessible and
              search engine optimized with various technologies and tools like
              ReactJs, Redux, NextJs, VueJs and others.
              <br />
            </p>
          </Reveal>
          <Reveal
            direction={"left"}
            className={`${styles.card} ${styles.mobile}`}
          >
            <h3>
              {" "}
              <FaMobile /> Mobile Developer
            </h3>
            <p>
              I recently started looking into mobile development and prepared a
              plant to start learn mobile development starting with a popular
              cross-platform framework and working may way to build a real
              mobile applications with advanced features.
            </p>
          </Reveal>
          <Reveal
            direction={"top"}
            className={`${styles.card} ${styles.human}`}
          >
            <h3>
              {" "}
              <FaBook /> Learner
            </h3>
            <p>
              As someone working the tech industry and always learning new
              things and improving my skills on a daily-basis. <br />I am also
              open to learn new technologies and techniques that help improve
              the general development experience for me and my team as well.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
