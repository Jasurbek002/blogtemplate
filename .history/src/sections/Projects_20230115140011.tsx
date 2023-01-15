import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useProjects } from "../hooks/useProjects";
import { Container } from "../layout";
import { Project, MotionDesc, MotionHeading } from "../components";
import { projectss } from "../constants/projects/projects";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "../constants";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const { projects } = useProjects(showMore);

  return (
    <section className="bg-[#1a1a1a]" id="projects">
      <Container>
        <MotionHeading title="Projects" textStyles="main-title" />

        <MotionDesc
          title="Here are a few past design projects I've worked on"
          textStyles="min-w-[200px] max-w-[600px] mx-auto font-medium text-center text-[16px] leading-8 mt-4 mb-20"
        />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {projectss.map((project) => (
            <Project key={project._id} project={project} />
          ))}
        </div>

        <motion.button
          variants={fadeIn("up", "tween", 1, 1)}
          className="border-2 hover:border-main-red hover:text-main-red mx-auto"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? (
            <>
              Show Less
              <BsFillArrowUpCircleFill size={20} />
            </>
          ) : (
            <>
              Show More
              <BsFillArrowDownCircleFill size={20} />
            </>
          )}
        </motion.button>
      </Container>
    </section>
  );
}
