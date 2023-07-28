import { type SelectInputProps } from "@/utils/componentTypes";
import styles from "./index.module.scss";
import { useState, type FocusEvent } from "react";
const Select = ({
  outlined,
  shadow,
  options,
  defaultOption,
  error,
  ...props
}: SelectInputProps) => {
  const [focused, setFocused] = useState(false);
  const focusHandler = (e: FocusEvent<HTMLSelectElement>) => {
    if (props.onFocus) props.onFocus(e);
    setFocused(true);
  };

  const blurHandler = (e: FocusEvent<HTMLSelectElement>) => {
    if (props.onBlur) props.onBlur(e);
    setFocused(false);
  };
  return (
    <div className={styles.container} role="textbox" title={props.title}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <div
        className={styles.inputContainer}
        data-error={error}
        data-outlined={outlined}
        data-shadow={shadow}
        data-focus={focused}
      >
        <select onFocus={focusHandler} onBlur={blurHandler} {...props}>
          {options.map((i) => (
            <option
              key={i.value}
              value={i.value}
              defaultChecked={i.value === defaultOption?.value}
            >
              {i.name}
            </option>
          ))}
        </select>
        <small
          role="alert"
          aria-live="assertive"
          aria-hidden={!error}
          hidden={!error}
        >
          {props.errormessage}
        </small>
      </div>
    </div>
  );
};

export default Select;
