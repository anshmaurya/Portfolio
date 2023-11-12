"use client";
import React,{ useEffect } from "react";
import { motion } from "framer-motion";
import {useInView} from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/activeSection";
const About = () => {
  const { ref , inView } = useInView();
  const {setActiveSection} = useActiveSectionContext();

    useEffect(() => {
      if(inView){
        setActiveSection("About");
      }
    }, [inView,setActiveSection]);
    
 
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h2 className="text-3xl font-medium capitalize mb-8">About me</h2>
      <p className="mb-3">
        Let me introduce myself, I am a{" "}
        <span className="font-medium">
          Ethical Hacker/Network Penetration Tester
        </span>
        ,and{" "}
        <span className="font-medium">full Stack Developer(MERN)</span> .{" "}
        <span className="italic">
          Passionate Cybersecurity Enthusiast leveraging advanced training in
          B.Sc. Cybersecurity to safeguard digital landscapes.{" "}
        </span>{" "}
        Equipped with in-depth knowledge in{" "}
        <span className="underline">
          threat detection, risk assessment, and security protocols.
        </span>{" "}
        Eager to contribute technical expertise and a commitment to enhancing
        online safety and resilience. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js/Expressjs ,MongoDB and Web-Pen-Testing
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Penetration Tester/Ethical Hacker.
      </p>
      <p>
      <span className="italic">When I am not coding</span>, I enjoy playing
        video games, watching movies, and playing Cricket. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
};

export default About;
