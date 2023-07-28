import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "@/assets/images/logo/png/movies-home-high-resolution-logo-color-on-transparent-background (1).png";
import Avatar from "../Avatar";
import Button from "../Buttons/Button";
import TextInput from "../Inputs/TextInput";
import styles from "./index.module.scss";

const Navigation = () => {
  const [hidden, setHidden] = useState(false);
  const { data: userData } = useSession();
  useLayoutEffect(() => {
    let lastPosition = 0;
    function scrollHandler() {
      if (lastPosition > scrollY) setHidden(false);
      else if (scrollY > 400) setHidden(true);
      lastPosition = scrollY;
    }
    document.addEventListener("scroll", scrollHandler);

    return () => document.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <nav className={styles.nav} data-hide={hidden}>
      <Link href="/" title="Website title">
        <Image
          src={Logo.src}
          fill
          alt="SOME TITLE FOR THE WEBSITE"
          style={{ objectFit: "contain" }}
        />
      </Link>
      <ul>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>New</li>
      </ul>
      <TextInput type="text" outlined placeholder="Search" />
      <Avatar
        size={36}
        src={userData?.user?.image ? userData.user.image : ""}
        alt="some text"
      />
      <Button title="open menu" hidden>
        <GiHamburgerMenu size={24} />
      </Button>
    </nav>
  );
};

export default Navigation;
