import { render } from "react-dom"
import { motion } from "framer-motion";
import { RiGithubLine, RiExternalLinkLine } from "../constants";

export default function Card({img,title,git1,git2,link}:any){
    return (
        <motion.div
        className="w-76 h-76 flex flex-col items-center bg-black rounded-lg border-1 border-white" 
        >
           <img
           className="w-full h-40"
            src={img}
             alt="icon" />
             <p className="w-11/12 text-center py-1 border-b-2 border-white ron text-white">
                {title}
             </p>
             <div className="w-full flex justify-evenly p-1 items-center">
               <a 
               className="w-14 h-14"
               target="_blank"
                rel="noreferrer"
               href={git1}>
                 <RiGithubLine size={30}/>
               </a>
               <a 
               className="w-14 h-14"
               target="_blank"
                rel="noreferrer"
               href={git2 ? git2 : ''}>
               { git2 ? <RiGithubLine size={30}/> : '' }
               </a>
                <a 
                href={link}
                className="w-14 h-14"
                target="_blank"
                rel="noreferrer"
                >
                    <RiExternalLinkLine size={30} />
                </a>
             </div>

        </motion.div>
    );
}

