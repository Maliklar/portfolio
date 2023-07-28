import styles from "./index.module.scss";
const Form = ({
  children,
  ...props
}: React.FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  );
};
export default Form;
