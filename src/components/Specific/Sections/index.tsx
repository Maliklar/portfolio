import styles from "./index.module.scss";

type Props = {
  title: string;
  children: JSX.Element;
};
const Section = ({ title, children }: Props) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};
export default Section;
