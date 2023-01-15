import { FaTwitter, FaLinkedin, FaGithub } from "../icons";

const navLinks = [
  {
    link: "#tech",
    title: "Technologies",
  },
  {
    link: "#skills",
    title: "Skills",
  },
  {
    link: "#projects",
    title: "Projects",
  },
  {
    link: "#connect",
    title: "Connect",
  },
];

const socialLinks = [
  {
    link: "https://www.github.com/liildev/",
    Icon: FaGithub,
  },
  {
    link: "https://twitter.com/liildev",
    Icon: FaTwitter,
  },
  {
    link: "https://www.linkedin.com/in/liildev/",
    Icon: FaLinkedin,
  },
];

const footerLinks = [
  {
    title: "Call",
    item: "99-955-66-99",
    href: "tel",
  },
  {
    title: "Mail",
    item: "liildev@mail.ru",
    href: "mailto",
  },
];

export { navLinks, socialLinks, footerLinks };
