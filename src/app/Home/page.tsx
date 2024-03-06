"use client";
import React from 'react'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";

type Props = {}

const page = (props: Props) => {
    return (
        <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden" id='home'>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-rose-50 to-rose-400 bg-opacity-50">
                    Mayank Mishra <br />Developer, Designer, Data Analyst
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    An Indian tech maestro, blending HTML, CSS, JavaScript, C++, and Java with AI magic to craft extraordinary digital experiences.
                </p>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  w-fit h-auto rounded-xl p-6 border  ">
                        
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src="/mayank.jpg"
                                height="6000"
                                width="4000"
                                className="h-72 w-72 object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        
                    </CardBody>
                </CardContainer>
            </div>
        </div>
    )
}

export default page