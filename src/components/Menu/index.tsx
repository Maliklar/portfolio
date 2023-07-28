import { type ReactNode } from "react";
import styles from "./index.module.scss";
type Props = {
  children: ReactNode;
};
const Menu = ({ children }: Props) => {
  return <ul className={styles.container}>{children}</ul>;
};
export default Menu;
