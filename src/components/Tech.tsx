import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { ITechnology } from "../types";

interface Props {
  technology: ITechnology;
}

export default function Tech({ technology }: Props) {
  const { id, title, decsription, Icon } = technology;

  return (
    <motion.li
      variants={fadeIn("up", "spring", id * 0.5, 1)}
      className="flex flex-col items-center justify-start text-black"
    >
      <picture className="h-1/3">{<Icon size={120} />}</picture>

      <h5 className="text-main-red">{title}</h5>

      <p className="w-full font-medium sx:max-w-[300px] text-center leading-7 text-[16px] mt-5">
        {decsription}
      </p>
    </motion.li>
  );
}
