"use client";
import { type TextInputProps } from "@/utils/componentTypes";
import styles from "./index.module.scss";
import { useState, type FocusEvent } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import clsx from "clsx";
import useUIContext from "@/contexts/UIContext/useUIContext";

const TextInput = ({
  outlined,
  shadow,
  error,
  Icon,
  className,
  ...props
}: TextInputProps) => {
  const context = useUIContext();
  const [focused, setFocused] = useState(false);
  const focusHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (props.onFocus) props.onFocus(e);
    setFocused(true);
  };

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (props.onBlur) props.onBlur(e);
    setFocused(false);
  };

  return (
    <div
      className={clsx(styles.container, className)}
      role="textbox"
      title={props.title}
      data-theme={context.theme}
    >
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <div
        className={styles.inputContainer}
        data-error={error}
        data-outlined={outlined}
        data-shadow={shadow}
        data-focus={focused}
      >
        {Icon && <Icon size="1.1em" />}
        <input onFocus={focusHandler} onBlur={blurHandler} {...props} />
        {error && <FaExclamationCircle />}
      </div>
      <small
        role="alert"
        aria-live="assertive"
        aria-hidden={!error}
        hidden={!error}
      >
        {props.errormessage}
      </small>
    </div>
  );
};

export default TextInput;
