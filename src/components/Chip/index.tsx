import { HiXCircle } from "react-icons/hi";
import styles from "./index.module.scss";

type ChipProps = {
  title: string;
  removable?: boolean;
  removeClick?: VoidFunction;
} & React.SelectHTMLAttributes<HTMLDivElement>;
const Chip = ({ title, removable, removeClick, ...props }: ChipProps) => {
  return (
    <div className={styles.chip} {...props}>
      {removable && <HiXCircle size="1.5em" onClick={removeClick} />}
      {title}
    </div>
  );
};

export default Chip;
