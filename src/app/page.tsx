import Image from "next/image";
import styles from "@/styles/pages/index.module.scss";
import Malik from "@/assets/images/malik.png";
import Button from "@/components/Buttons/Button";
import { FaChevronDown } from "react-icons/fa";
export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <h2>Hello There</h2>
        <p>My name is Malik Elbadri, I am a passionate frontend developer</p>
        <p>
          This website is intended to demonstrate the skills and use frontend
          tools to create an amazing user interfaces
        </p>
        <Button color="primary" iconPosition="end" Icon={FaChevronDown}>
          Scroll Down to start
        </Button>
      </section>

      <section className={styles.section2}>
        <h2>Stack</h2>
        <p></p>
      </section>
    </main>
  );
}
