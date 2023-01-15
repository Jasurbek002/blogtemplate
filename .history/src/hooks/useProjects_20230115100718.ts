import { useEffect, useState } from "react";
import { IProject } from "../types";
import { client } from "../utils/client";
import groq from "groq";

export const useProjects = (showMore: boolean) => {
  const [projects, setProjects] = useState<IProject[]>([

  ]);

  useEffect(() => {
    const query = groq`*[_type == "projects"] {
      _id,
     ...
      } | order(_createdAt desc)`;

    client.fetch(query).then((data) => {
      setProjects(data);
    });
  }, []);

  const groupedProjects = showMore ? projects : projects.slice(0, 3);

  return { projects: groupedProjects };
};
