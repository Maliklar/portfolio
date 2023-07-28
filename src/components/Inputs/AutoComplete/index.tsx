import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { FaCheck, FaExclamationCircle } from "react-icons/fa";

import Chip from "@/components/Chip";
import {
  type AutoCompleteProps,
  type OptionType,
} from "@/utils/types/componentTypes";
import styles from "./index.module.scss";

const AutoComplete = ({
  options: originalOptions,
  onSelected,
  multiple,
  error,
  outlined,
  Icon,
  shadow,
  ...props
}: AutoCompleteProps) => {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const [focusedOption, setFocusedOption] = useState(0);
  const [focused, setFocused] = useState(false);
  const [options, setOptions] = useState(originalOptions);
  const optionsRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the component (blur and close the options menu)
  useEffect(() => {
    setOptions(originalOptions);
    function eventHandler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setFocused(false);
      }
    }
    document.addEventListener("click", eventHandler, true);
    return () => document.removeEventListener("click", eventHandler, true);
  }, [originalOptions]);

  const focusHandler = () => {
    setFocused(true);
    if (value) {
      const filtered = originalOptions.filter((o) => o.name.match(value));
      setOptions(filtered);
    } else setOptions(originalOptions);
  };

  const changeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
    if (target.value) {
      const filtered = originalOptions.filter((o) =>
        o.name.match(target.value)
      );
      setOptions(filtered);
    } else setOptions(originalOptions);
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setFocusedOption((i) => {
        const focusedIndex = (i + 1) % options.length;
        updateScrollPosition(focusedIndex);
        return focusedIndex;
      });
    } else if (e.key === "ArrowUp")
      setFocusedOption((i) => {
        const focusedIndex =
          i > 0 ? i - 1 : (i = options.length - (1 % options.length));
        updateScrollPosition(focusedIndex);
        return focusedIndex;
      });
    else if (e.key === "Enter") {
      if (multiple) {
        const option = options[focusedOption];
        if (option) option.selected = !option.selected;
      } else {
        options.forEach((option, index) => {
          if (focusedOption === index) option.selected = !option.selected;
          else option.selected = false;
        });
      }
      handleSelected();
      setOptions([...options]);
    }
  };

  const optionClickHandler = (name: string, value: unknown) => {
    if (multiple) {
      const option = options.find((o) => o.name === name && o.value === value);
      if (option) option.selected = !option.selected;
    } else {
      options.forEach((option) => {
        if (option.name === name && option.value === value)
          option.selected = !option.selected;
        else option.selected = false;
      });
    }
    handleSelected();
    setFocused(false);
    setOptions([...options]);
  };

  const handleSelected = () => {
    const selected = options.filter((o) => o.selected === true);
    onSelected(selected);
  };

  const removeOptionHandler = (option: OptionType) => {
    const found = options.find((o) => o === option);
    if (found) found.selected = false;
    setOptions([...options]);
  };

  // Helper functions
  const updateScrollPosition = (index: number) => {
    if (!optionsRef.current) return;
    const optionsElement = optionsRef.current;
    const children = optionsElement.children;
    const { top: parentTop, height: parentHeight } =
      optionsRef.current.getBoundingClientRect();
    const child = children.item(index) as Element;
    if (!child) return;
    const { top: optionTop } = child.getBoundingClientRect();
    const parentOffset = parentTop - parentHeight;
    const childOffset = optionTop - parentTop;

    if (childOffset <= 0) {
      optionsRef.current.scrollBy({
        behavior: "smooth",
        top: childOffset,
      });
    } else if (childOffset >= parentOffset) {
      optionsRef.current.scrollBy({
        behavior: "smooth",
        top: childOffset - parentOffset,
      });
    }
  };

  return (
    <div className={styles.container} ref={ref} onKeyDown={keyDownHandler}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <div
        className={styles.inputContainer}
        data-focus={focused}
        data-error={error}
        data-outlined={outlined}
        data-shadow={shadow}
      >
        {Icon && <Icon style={{ minWidth: "1.5em" }} size="1.5em" />}

        <div className={styles.input} data-value={value}>
          <input
            onFocus={focusHandler}
            onChange={changeHandler}
            type="text"
            {...props}
            value={value}
          />
          {options.find((o) => o.selected) ? (
            <div className={styles.selectedOptionsContainer}>
              {options.map((option) => {
                if (option.selected === true)
                  return (
                    <Chip
                      title={option.name}
                      removable={multiple}
                      key={`${option.name}${option.value as string}`}
                      removeClick={() => removeOptionHandler(option)}
                    />
                  );
              })}
            </div>
          ) : null}
        </div>
        {error && <FaExclamationCircle />}
      </div>

      <div className={styles.options} ref={optionsRef} data-visible={focused}>
        {options &&
          options.map((i, index) => (
            <Option
              name={i.name}
              value={i.value}
              key={i.name}
              index={index}
              selected={i.selected}
              focused={index === focusedOption}
              optionClickHandler={optionClickHandler}
              onMouseOver={() => setFocusedOption(index)}
            />
          ))}
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

type OptionProps = {
  name: string;
  value: unknown;
  index: number;
  optionClickHandler: (name: string, value: unknown) => void;
  onMouseOver: (index: number) => void;
  selected?: boolean;
  focused?: boolean;
};
const Option = ({
  name,
  value,
  selected,
  focused,
  index,
  optionClickHandler,
  onMouseOver,
}: OptionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={styles.option}
      data-focused={focused}
      tabIndex={0}
      data-value={value}
      data-selected={selected}
      onMouseEnter={() => onMouseOver(index)}
      onFocus={() => onMouseOver(index)}
      onClick={() => optionClickHandler(name, value)}
    >
      <div>{name}</div>
      {selected && <FaCheck />}
    </div>
  );
};

export default AutoComplete;
