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
} & React.HtmlHTMLAttributes<HTMLDivElement>;

// @ts-ignore
const Reveal = ({ children, direction, ...props }: Props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  let position = { y: 0, x: 0 };
  switch (direction) {
    case "left":
      position = { ...position, x: -75 };
      break;

    case "right":
      position = { ...position, x: 75 };
      break;

    case "bottom":
      position = { ...position, y: -75 };
      break;

    case "top":
      position = { ...position, y: 75 };
      break;

    default:
      position = { ...position, y: 75 };
      break;
  }
  return (
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
