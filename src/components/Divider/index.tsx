import styles from "./index.module.scss";
type Props = {
  vertical?: boolean;
};
const Divider = ({ vertical }: Props) => {
  return <div className={styles.container} data-vertical={vertical} />;
};
export default Divider;
