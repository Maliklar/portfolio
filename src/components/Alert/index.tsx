import clsx from "clsx";
import { type IconType } from "react-icons";
import styles from "./index.module.scss";
import { CSSTransition } from "react-transition-group";

export type AlertProps = {
  color?: "primary" | "warning" | "success" | "error" | "secondary";
  Icon?: IconType;
  ActionButton?: React.ReactNode;
  text: string;
  transition?: boolean;
  animation?:
    | "popup"
    | "slideFromRight"
    | "slideFromRight"
    | "slideFromTop"
    | "slideFromBottom";
  float?: "start" | "end";
  open?: boolean;
  className?: string;
};
const Alert = ({
  color = "primary",
  ActionButton,
  Icon,
  text,
  float,
  animation,
  open = true,
  className,
}: AlertProps) => {
  return (
    <CSSTransition timeout={200} in={open} unmountOnExit mountOnEnter>
      {(state) => (
        <figure
          className={clsx(styles.container, styles[state], className)}
          data-float={float}
          data-animation={animation}
          color={color}
          data-shadow
        >
          {Icon && <Icon size="2em" />}
          <p>{text}</p>
          {ActionButton && ActionButton}
        </figure>
      )}
    </CSSTransition>
  );
};

export default Alert;
