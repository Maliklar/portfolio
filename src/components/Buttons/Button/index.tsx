import { useContext, type ButtonHTMLAttributes } from "react";
import { type IconType } from "react-icons";
import styles from "./index.module.scss";
import clsx from "clsx";
import useUIContext from "@/contexts/UIContext/useUIContext";

type ButtonProps = {
  color?: "primary" | "warning" | "success" | "error" | "secondary";
  shadow?: boolean;
  outlined?: boolean;
  Icon?: IconType;
  iconPosition?: "start" | "end";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  shadow,
  outlined,
  Icon,
  iconPosition = "start",
  className,
  ...props
}: ButtonProps) => {
  const { theme } = useUIContext();
  return (
    <button
      className={clsx(styles.container, className)}
      data-shadow={shadow}
      data-outlined={outlined}
      data-theme={theme}
      {...props}
    >
      {iconPosition === "start" && Icon && <Icon />}
      {props.children}
      {iconPosition === "end" && Icon && <Icon />}
    </button>
  );
};

export default Button;
