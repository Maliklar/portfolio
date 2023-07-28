import Image from "next/image";
import styles from "./index.module.scss";
type Props = {
  src: string;
  title: string;
};
const SkillCircle = ({ src, title }: Props) => {
  return (
    <li className={styles.container}>
      <div className={styles.circleContainer}>
        <Image src={src} height={100} width={100} alt={title} />
      </div>
      <strong>{title}</strong>
    </li>
  );
};
export default SkillCircle;
