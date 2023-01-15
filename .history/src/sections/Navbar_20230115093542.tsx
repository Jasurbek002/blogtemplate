import { motion, useSpring, useScroll } from "framer-motion";
import { useMedia } from "../hooks/useMedia";
import { useScrolling } from "../hooks/useScrolling";
import { socialLinks } from "../constants";
import { progressVariant } from "../utils/motion";
import { Container } from "../layout";

export default function Navbar() {
  const { scrolled } = useScrolling();
  const { deviceSliced } = useMedia();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, progressVariant);

  return (
    <div className={`navbar-sticky ${scrolled && "visible"}`}>
      <Container>
        <div className="top-wrapper py-2">
          <a
            href="#home"
            className="text-main-red font-extrabold text-4xl inline-block"
          >
            TJ
          </a>

          <ul className="nav-wrapper">
            {deviceSliced?.map(({ title, link }) => (
              <li key={title}>
                <a
                  href={link}
                  // title={title}
                  className="nav-link text-sm text-main-black cursor-pointer"
                >
                  {title}
                </a>
              </li>
            ))}

            {socialLinks.map(({ link, Icon }) => (
              <li key={link}>
                <a
                  href={link}
                  className="nav-link text-main-black"
                  target="_blank"
                  rel="noreferrer"
                >
                  {<Icon size={20} />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {scrolled && (
          <motion.div className="progress-bar lg:hidden" style={{ scaleX }} />
        )}
      </Container>
    </div>
  );
}
