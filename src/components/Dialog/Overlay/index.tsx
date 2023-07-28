import { type ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.scss";

type Props = {
  onClick: VoidFunction;
  children: ReactNode;
  portal: boolean;
};
const Overlay = ({ onClick, portal, children }: Props) => {
  if (!portal)
    return (
      <div className={styles.overlay} onClick={onClick}>
        {children}
      </div>
    );

  if (portal && typeof window === "object") {
    const portal = document.getElementById("portal");
    if (portal)
      return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={onClick}>
          {children}
        </div>,
        portal
      );
  }
  return null;
};

export default Overlay;
