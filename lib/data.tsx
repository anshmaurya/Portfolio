import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQl",
  "Express.js",
  "Nessus",
  "Linux",
  "Metasploit",
  "wireshark",
  "nmap",
  "Web Penetration Testing",
  "Network Penetration Testing"

] as const;