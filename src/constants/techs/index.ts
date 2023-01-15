import { ITechnology } from "../../types";
import { DiReact, DiDatabase, SiZendframework } from "../icons";

export const techs: ITechnology[] = [
  {
    id: 1,
    Icon: DiReact,
    title: "frontend",
    decsription:
      "Experience with React, Vite and Next for building beautiful and functional web applications",
  },

  {
    id: 2,
    Icon: DiDatabase,
    title: "backend",
    decsription:
      "Experience with Node and Databases for building beautiful functional web and mobile applications",
  },

  {
    id: 3,
    Icon: SiZendframework,
    title: "ux/ui",
    decsription:
      "UI/UX and front-end expert observes user behavior to improve the visible design of an application",
  },
];
