import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useProjects } from "../hooks/useProjects";
import { Container } from "../layout";
import { Project, MotionDesc, MotionHeading } from "../components";
import { projectss } from "../constants/projects/projects";
import { pro } from "../assets/assets";

import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "../constants";
import Card from "../components/card";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const { projects } = useProjects(showMore);

  return (
    <section className="bg-[#1a1a1a] w-full" id="projects">
      <Container>
        <MotionHeading title="Projects" textStyles="main-title" />

        <MotionDesc
          title="Here are a few past design projects I've worked on"
          textStyles="min-w-[200px] max-w-[600px] mx-auto font-medium text-center text-[16px] leading-8 mt-4 mb-20"
        />

        <div
          className="grid justify-evenly  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >

          <Card
            img={pro.hil}
            title={'React js, Scss, Node js, Express js, postgresql'}
            git1={'https://github.com/Jasurbek002/hh.front.app.git'}
            git2={'https://github.com/Jasurbek002/node-js-postgress-template.git'}
            link={'https://hillhouse-capital.org/'}
          />

          <Card
            img={pro.asmoc}
            title={'Html, Scss, Bootstrap5, javascript'}
            git1={'https://github.com/Jasurbek002/hh.front.app.git'}
            git2={'https://github.com/Jasurbek002/node-js-postgress-template.git'}
            link={'https://hillhouse-capital.org/'}
          />

          <Card
            img={pro.tdtuico}
            title={'Next js, tailwind css, javascript, Node js, Express js, postgresql'}
            git1={'https://github.com/Jasurbek002/hh.front.app.git'}
            git2={'https://github.com/Jasurbek002/node-js-postgress-template.git'}
            link={'https://hillhouse-capital.org/'}
          />

          {/* {projectss.map((project) => (
            <Project key={project._id} project={project} />
          ))} */}
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
