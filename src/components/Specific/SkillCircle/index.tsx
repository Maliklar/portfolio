import Image from "next/image";
import styles from "./index.module.scss";
import { IconType } from "react-icons";
type Props = {
  src: IconType;
  title: string;
  shown: boolean;
  color: string;
};
const SkillCircle = ({ src: Icon, title, shown }: Props) => {
  return (
    <li className={styles.container} data-shown={shown}>
      <div className={styles.circleContainer}>
        <Icon size="3rem" />
      </div>
      <strong>{title}</strong>
    </li>
  );
};
export default SkillCircle;
