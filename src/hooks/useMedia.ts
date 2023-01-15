import { useMediaQuery } from "react-responsive";
import { navLinks } from "../constants";

export const useMedia = () => {
  const desktop = useMediaQuery({ query: "(max-width: 1024px)" });
  const tablet = useMediaQuery({ query: "(max-width: 768px)" });
  const device = useMediaQuery({ query: "(max-width: 640px)" });

  const slicedLinks = desktop ? navLinks.slice(1) : navLinks;
  const tabletSliced = tablet ? slicedLinks.slice(1) : slicedLinks;
  const deviceSliced = device ? tabletSliced.slice(2) : tabletSliced;

  return { deviceSliced };
};
