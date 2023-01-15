import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface ITechnology {
  id: number;
  Icon: IconType;
  title: string;
  decsription: string;
}

export interface ISkill {
  name: string;
  url: string;
}

export interface IThumb {
  _key: string;
  _type: "image";
  asset: {
    url: string;
  };
}

export interface IProject {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "projects";
  title: string;
  tags: string[];
  code: string;
  source: string;
  image: IThumb[];
}

export interface IMotion {
  title: string;
  textStyles: string;
}

export interface IDiv {
  children: ReactNode;
}
