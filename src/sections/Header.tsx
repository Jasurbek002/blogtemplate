import { motion } from "framer-motion";
import { useMedia } from "../hooks/useMedia";
import { socialLinks } from "../constants";
import { headerVariant, fadeIn, textVarinat } from "../utils/motion";
import { Container } from "../layout";
import { MotionHeading } from "../components";
import { BsFillArrowRightCircleFill } from "../constants";

export default function Header() {
  const { deviceSliced } = useMedia();

  return (
    <header className="bg-main-black min-h-[700px] relative -z-20" id="home">
      <Container>
        <motion.div variants={headerVariant} className="top-wrapper">
          <a href="#home" className="text-main-red font-extrabold text-6xl">
            TJ
          </a>

          <ul className="nav-wrapper gap-x-8">
            {deviceSliced?.map(({ title, link }) => (
              <li key={title}>
                <a href={link} className="nav-link">
                  {title}
                </a>
              </li>
            ))}

            {socialLinks.map(({ link, Icon }) => (
              <li key={link}>
                <a
                  href={link}
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {<Icon size={25} />}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="main-wrapper">
          <MotionHeading
            title="Hi, there!"
            textStyles="text-[55px] text-center sm:text-start leading-75 font-semibold mb-1"
          />

          <motion.h4
            className="text-center lg:text-start max-w-[600px] text-lg"
            variants={textVarinat(0.5)}
          >
            I&apos;m a full stack developer, specialized in development of web
            applications using React, Node & more
          </motion.h4>

          <motion.button
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="bg-main-red border-2 border-[#e93333] hover:bg-transparent mt-16 lg:mx-0 mx-auto"
          >
            <a href="#connect" className="flex items-center gap-2">
              Let&apos;s connect
              <BsFillArrowRightCircleFill size={20} />
            </a>
          </motion.button>

        </div>
      </Container>
    </header>
  );
}
