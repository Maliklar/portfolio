import {
  AnimationDefinition,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import styles from "./index.module.scss";
import { useEffect, useRef } from "react";

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & AnimationDefinition;

// @ts-ignore
const Reveal = ({ children, ...props }: Props) => {
  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
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
