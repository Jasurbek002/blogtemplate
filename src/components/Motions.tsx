import { motion } from "framer-motion";
import { IDiv, IMotion } from "../types";
import { textContainer, mainVariant } from "../utils/motion";

const MotionHeading = ({ title, textStyles }: IMotion) => {
  return (
    <motion.h2
      variants={textContainer}
      className={textStyles}
      initial="hidden"
      whileInView="show"
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={mainVariant} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const MotionDesc = ({ title, textStyles }: IMotion) => {
  return (
    <motion.p
      variants={mainVariant}
      initial="hidden"
      whileInView="show"
      className={textStyles}
    >
      {title}
    </motion.p>
  );
};

const MotionDiv = ({ children }: IDiv) => {
  return (
    <motion.div variants={mainVariant} initial="hidden" whileInView="show">
      {children}
    </motion.div>
  );
};

export { MotionHeading, MotionDesc, MotionDiv };
