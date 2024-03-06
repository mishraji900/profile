"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { urlFor } from "@/lib/Sanity";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    name: string;
    description: string;
    image: string;
    gitUrl:string;
    previewUrl:string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative rounded-md p-10 no-visible-scrollbar"
      ref={ref}
    >

      <div className="div relative flex items-start px-4">
        <div className="lg:max-w-[40vw]">
          {content.map((item, index) => (
            <div key={item.name + index} className="my-20 flex space-x-10 ">
              <div>
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.name}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
                <div className="flex space-x-4 mt-2">
                <Link href={item.gitUrl} target="blank">
                <GitHubLogoIcon className="h-6 w-6"/>
                </Link>
                <Link href={item.previewUrl} target="blank">
                <ExternalLinkIcon className="h-6 w-6"/>
                </Link>
                </div>
              </div>
              <motion.div
                animate={{
                  background: linearGradients[activeCard % linearGradients.length],
                }}
                className={cn(
                  "hidden lg:block h-60 w-80 rounded-md bg-white sticky mt-5 overflow-hidden",
                  contentClassName
                )}
              >
                 <img src={urlFor(item.image).url()} alt={item.name} className="h-60" />

              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
    </motion.div>
  );
};
