import clsx from "clsx";
import { useEffect, type ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import Button from "../Buttons/Button";
import Overlay from "./Overlay";
import styles from "./index.module.scss";

/**
 *
 */

type Props = {
  onClose: VoidFunction;
  open: boolean;
  children?: ReactNode;
  loading?: boolean;
  size?: "large" | "small" | "fullscreen";
  animation?:
    | "popup"
    | "slideFromRight"
    | "slideFromRight"
    | "slideFromTop"
    | "slideFromBottom";
  header?: boolean;
  title?: string;
  portal?: boolean;
};

const Dialog = ({
  onClose,
  open,
  size,
  loading,
  animation,
  header = true,
  title,
  children,
  portal = true,
}: Props) => {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);
  return (
    <CSSTransition timeout={200} in={open} unmountOnExit mountOnEnter>
      {(state) => {
        return (
          <Overlay portal={portal} onClick={onClose}>
            <dialog
              onClick={(e) => e.stopPropagation()}
              className={clsx(styles.dialog, styles[state])}
              data-loading={loading}
              data-size={size}
              data-animation={animation}
              open
            >
              {header && (
                <div role="header" className={styles.header}>
                  <h3>{title}</h3>
                  <Button onClick={onClose}>
                    <AiOutlineClose size="1.3em" />
                  </Button>
                </div>
              )}
              <div role="main" className={styles.main}>
                {children}
              </div>
            </dialog>
          </Overlay>
        );
      }}
    </CSSTransition>
  );
};

export default Dialog;
