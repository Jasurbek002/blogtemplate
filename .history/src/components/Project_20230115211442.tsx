import { motion } from "framer-motion";
import { useView } from "../hooks/useView";
// import { urlFor } from "../utils/client";
import { IProject } from "../types";
import { RiGithubLine, RiExternalLinkLine } from "../constants";
import { projectVariant } from "../utils/motion";

interface Props {
  project:IProject;
}

export default function Project({ project }: Props) {
  const { ref, control } = useView();

  const { title, tags, code, source, image } = project;

  return (
    <motion.div
      ref={ref}
      animate={control}
      className="project-block"
      variants={projectVariant}
    >
      {/* <img src={urlFor(image).url()} className="project-thumb" alt={title} /> */}

      <div className="project-content">
        <h4 className="text-center text-black text-lg sx:text-3xl sm:text-lg font-bold uppercase">
          {title}
        </h4>

        <ul className="flex-center flex-wrap gap-2 xl:gap-5 transition duration-1000 ease-in-out">
          {tags.map((tag, i) => {
            return (
              <li
                className="border-2 text-black border-black p-2 sm:p-1 rounded-md"
                key={i}
              >
                {tag}
              </li>
            );
          })}
        </ul>

        <div className="flex-center gap-2 text-black">
          <a href={code} target="_blank" rel="noreferrer">
            <RiGithubLine size={30} />
          </a>
          <a href={source} target="_blank" rel="noreferrer">
            <RiExternalLinkLine size={30} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
