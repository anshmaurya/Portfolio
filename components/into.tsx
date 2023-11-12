"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import assets from "../assets/anshmaurya.jpg";
import Link from "next/link";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
const Into = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" id="home" >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={assets}
              alt="Ansh Maurya"
              width="80"
              height="100"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-x1 -z-50"
            />
            <motion.span
              className="text-4xl absolute bottom-0 right-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>

      <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
       initial={{ opacity:0 , y:100 }}
       animate={{opacity:1 , y:0 }}
      >
      <span className="font-bold">Hello, I am Ansh Maurya.</span> I'm a{" "}
      <span className="font-bold">Penetration Tester</span> & {" "}
        <span className="font-bold">full-stack developer(MERN).</span>  I enjoy building <span className="italic">sites & apps</span>.
         My focus is{" "} <span className="underline">Cyber Security (Penetration Testing)</span>. 
      </motion.p>
        <motion.div className="flex  items-center justify-center gap-2 px-4 text-lg font-medium flex-col sm:flex-row"
         initial={{ opacity:0 , y:100 }}
         animate={{opacity:1 , y:0 }}
         transition={{
          delay:0.1,
         }}
        
        >
            <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transtion"> Contact me here <BsArrowRight  className="opacity-70 group-hover:translate-x-1 transition"/></Link>
            <a  className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110 active:scale-105 transtion cursor-pointer border border-black/10 dark:bg-white/10 " href="/CV.pdf" download >Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/></a>
            <a className="bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transtion cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60" href="https://www.linkedin.com/in/ansh-maurya-16a2b7254/" target="_blank"><BsLinkedin/></a>
            <a className="bg-white p-4 flex items-center text-gray-700 gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transtion cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60" href="https://github.com/anshmaurya" target="_blank"><FaGithubSquare/></a>
           
           
        </motion.div>

    </section>
  );
};

export default Into;
