import { ISkill } from "../types";

interface Props {
  skill: ISkill;
}

export default function Skill({ skill }: Props) {
  const { name, url } = skill;

  return (
    <div className="skill-wrapper">
      <img
        src={url}
        alt={name}
        className="object-contain w-12 h-12 ss:w-14 ss:h-14 sm:w-16 sm:h-16"
      />
    </div>
    // <img
    //   src={url}
    //   className="max-w-[100px] max-h-[70px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition ease-out duration-300 object-contain"
    //   alt={name}
    // />
  );
}
