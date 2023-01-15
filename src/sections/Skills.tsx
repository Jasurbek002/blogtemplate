import { motion } from "framer-motion";
import { skills } from "../constants";
import { fadeIn, mainVariant } from "../utils/motion";
import { Container } from "../layout";
import { Skill, MotionHeading } from "../components";

export default function Skills() {
  return (
    <section className="bg-[#ed1543]" id="skills">
      <Container>
        <MotionHeading title="Skills" textStyles="main-title" />

        <motion.p
          variants={mainVariant}
          className="font-medium text-center mt-4 mb-16"
        >
          Here are a few technologies I’ve been working with recently
        </motion.p>

        <motion.div
          className="flex-center flex-wrap gap-2"
          variants={fadeIn("up", "spring", 0.5, 1)}
        >
          {skills.map((skill) => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
