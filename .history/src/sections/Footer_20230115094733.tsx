import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { socialLinks } from "../constants";

export default function Footer() {
  return (
    <motion.footer initial="hidden" whileInView="show">
      <motion.div
        variants={fadeIn("up", "tween", 0.4, 1)}
        className="flex-center gap-x-4"
      >
        {socialLinks.map(({ link, Icon }) => (
          <a
            key={link}
            href={link}
            className="text-main-gray hover:text-main-dark trasnition duration-100 ease-in"
            target="_blank"
            rel="noreferrer"
          >
            <Icon size={25} />
          </a>
        ))}
      </motion.div>

      <motion.p
        variants={fadeIn("up", "tween", 0.8, 1)}
        className="mt-4 font-medium text-sm text-center leading-7 text-main-gray"
      >
        All Rights Reserved
        <br />
        {/* For call{"  "}
        <a href="call:Call" className="footer-link">
          99-955-66-99
        </a>
        <br />
        For mail{"  "}
        <a href="mailto:Mail" className="footer-link">
          liildev@mail.ru
        </a>
        <br /> */}
        Copyright © 2022-2023{" "}
        <a
          href="https://www.instagram.com/coder.i0/"
          className="footer-link"
          // target="_blank"
          rel="noreferrer"
        >
          Turg'unov Jasurbek
        </a>
        <br />
        Designed by{" "}
        <a
          href="https://dribbble.com/JakubStaron"
          className="footer-link"
          target="_blank"
          rel="noreferrer"
        >
          Me
        </a>
        , hosted by{" "}
        <a
          href="https://www.vercel.com"
          className="footer-link"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
      </motion.p>
    </motion.footer>
  );
}
