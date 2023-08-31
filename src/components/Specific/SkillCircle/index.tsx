import Image from "next/image";
import styles from "./index.module.scss";
type Props = {
  src: string;
  title: string;
  shown: boolean;
};
const SkillCircle = ({ src, title, shown }: Props) => {
  return (
    <li className={styles.container} data-shown={shown}>
      <div className={styles.circleContainer}>
        <Image
          src={src}
          height={100}
          width={100}
          style={{ objectFit: "contain" }}
          alt={title}
        />
      </div>
      <strong>{title}</strong>
    </li>
  );
};
export default SkillCircle;
