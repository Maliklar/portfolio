import {
  AnimationDefinition,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import styles from "./index.module.scss";
import { useEffect, useRef } from "react";

type Props = {
  direction?: "left" | "right" | "bottom" | "top";
  instant?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

// @ts-ignore
const Reveal = ({ children, direction, instant = false, ...props }: Props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (instant) return;

    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, instant]);

  let position = { y: 0, x: 0 };
  switch (direction) {
    case "left":
      position = { ...position, x: -75 };
      break;

    case "right":
      position = { ...position, x: 120 };
      break;

    case "bottom":
      position = { ...position, y: -120 };
      break;

    case "top":
      position = { ...position, y: 120 };
      break;

    default:
      position = { ...position, y: 120 };
      break;
  }
  if (instant) {
    return (
      //@ts-ignore
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, ...position },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, delay: 0.25 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
  return (
    //@ts-ignore
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, ...position },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
export default Reveal;
