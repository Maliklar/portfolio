import { IconType } from "react-icons";
import styles from "./index.module.scss";
type Props = {
  title: string;
  color?: string;
  Icon: IconType;
};
const SkillTag = ({ title, color = "lightgreen", Icon }: Props) => {
  return (
    <strong
      className={styles.tag}
      style={{
        color: color,
        border: `1px solid ${color}`,
      }}
    >
      <Icon />
      {title}
    </strong>
  );
};

export default SkillTag;
