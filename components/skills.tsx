"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import Hooks from "@/lib/hooks";
import { motion } from "framer-motion";
const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  

const Skills = () => {
    const { ref } = Hooks("Skills");
  return (
   
    <section
    id="skills"
    ref={ref}
    className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
  >
     <h2 className="text-3xl font-medium capitalize mb-8">My Skills</h2>
    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      {skillsData.map((skill, index) => (
        <motion.li
          className="bg-white border border-black rounded-xl px-5 py-3 dark:bg-white/60 "
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  </section>
  )
}

export default Skills