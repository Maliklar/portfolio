import styles from "./index.module.scss";
type Props = {
  title: string;
  color?: string;
};
const SkillTag = ({ title, color = "lightgreen" }: Props) => {
  return (
    <small
      className={styles.tag}
      style={{
        color: color,
        border: `1px solid ${color}`,
      }}
    >
      {title}
    </small>
  );
};

export default SkillTag;
