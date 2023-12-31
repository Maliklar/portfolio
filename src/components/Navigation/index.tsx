"use client";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import styles from "./index.module.scss";

const Navigation = () => {
  const [hidden, setHidden] = useState(false);
  useLayoutEffect(() => {
    function scrollHandler() {
      if (typeof window === "undefined") return;
      if (scrollY === 0) setHidden(false);
      else if (window.scrollY > 100) setHidden(true);
    }
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <header className={styles.header} data-hidden={hidden}>
      <nav className={styles.nav}>
        <Link href="/" title="Website title"></Link>
        <ul>
          <li>
            <Link href="#About Me">ABOUT</Link>
          </li>
          <li>
            <Link href="#Skills">SKILLS</Link>
          </li>
          <li>
            <Link href="#Projects">PROJECTS</Link>
          </li>
          <li>
            <Link href="#Testimonies">TESTIMONIES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
