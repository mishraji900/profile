"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

type Props = {}


const Lamp = (props: Props) =>  {
  return (
    <div id="WhoamI">
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-28 md:mt-0 lg:container bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Who am I?
        <p className="text-lg text-slate-100 tracking-normal">Excited to be your go-to tech maestro based in India! I'm not just your Web Developer, Web Designer and Data Analyst. Picture this: a symphony of HTML, CSS, Tailwind CSS, and JavaScript, blending seamlessly with the tech symphonies of python. Now, let's sprinkle in some AI magic to create experiences that'll make waves in the digital universe! Fueled by an insatiable curiosity and an unquenchable thirst for knowledge, I'm not just coding; I'm orchestrating digital masterpieces! Ready to embark on this exhilarating journey and turn ideas into extraordinary realities? Let's go!</p>
      </motion.h1>
    </LampContainer>
    </div>
  );
}

export default Lamp
