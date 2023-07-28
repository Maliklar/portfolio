import Image from "next/image";
import { useRef, useState, type ChangeEvent, type MouseEvent } from "react";
import { BiImageAdd } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import Button from "@/components/Buttons/Button";
import { type TextInputProps } from "@/utils/componentTypes";
import styles from "./index.module.scss";
type Props = {
  onFile: (file: File | null) => void;
} & Omit<TextInputProps, "Icon" | "type" | "placeholder">;
const ImageInput = ({ onFile, shadow, outlined, error, ...props }: Props) => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");

  const uploadImageHandler = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const removeImageHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setImageUrl("");
    onFile(null);
  };

  const imageChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const files = target.files;
    if (!files) return;
    const file = files[0];
    if (!file) return;
    onFile(file);
    setImageUrl(URL.createObjectURL(file));
  };

  const focusHandler = () => {
    setFocus(true);
  };
  const blurHandler = () => setFocus(false);

  return (
    <div className={styles.container}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <div
        tabIndex={0}
        className={styles.inputContainer}
        data-error={error}
        data-outlined={outlined}
        onFocus={focusHandler}
        onBlur={blurHandler}
        data-shadow={shadow}
        data-focus={focus}
        onClick={uploadImageHandler}
      >
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              fill
              alt="Preview Image"
              style={{ objectFit: "contain" }}
            />

            <Button
              className={styles.removeButton}
              color="error"
              onClick={removeImageHandler}
              Icon={FaTrash}
            >
              Remove
            </Button>
          </>
        ) : (
          <BiImageAdd size="4em" />
        )}
      </div>
      <small
        role="alert"
        aria-live="assertive"
        aria-hidden={!error}
        hidden={!error}
      >
        {props.errormessage}
      </small>
      <input
        ref={inputRef}
        {...props}
        onChange={imageChangeHandler}
        type="file"
        hidden
      />
    </div>
  );
};

export default ImageInput;
