import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { client, urlFor } from "@/lib/Sanity";
import Link from "next/link";

const SCE = () => {
    const tabs = [
        {
            title: "Skills",
            value: "skills",
            content: (
                <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center shadow-xl shadow-rose-950">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <div className="flex flex-col items-center justify-between">
                        <p className="text-xl mb-10">Skills</p>
                        <Skills />
                    </div>
                </div>
            ),
        },
        {
            title: "Certification",
            value: "certification",
            content: (
                <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center shadow-xl shadow-rose-950">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <div className="flex flex-col items-center justify-between">
                        <p className="text-xl mb-10">Certificate</p>
                        <Certificate />
                    </div>
                </div>
            ),
        },
        {
            title: "Education",
            value: "education",
            content: (
                <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center shadow-xl shadow-rose-950">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <div className="flex flex-col items-center justify-between">
                        <p className="text-xl mb-10">Education</p>
                        <Education />
                    </div>
                </div>
            ),
        },
    ];


    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-16">
            <Tabs tabs={tabs} />
        </div>
    );
}

export default SCE


async function getSkills() {
    const query = `*[_type == 'skills']`
    const data = await client.fetch(query)
    return data
}
const Skills = async () => {
    const data = await getSkills()
    return (
        <div className="grid grid-cols-5 gap-4">
            {
                data.map((skill: { image: any; }) => (
                    <div className="h-[3vh] md:h-[7vh] lg:h-[11vh] w-[7vw] bg-gray-200 rounded-full lg:rounded-xl flex items-center justify-center">
                        <img src={urlFor(skill.image).url()} alt="" className="p-2 h-[6vh] lg:h-[10vh]" />
                    </div>
                ))
            }
        </div>
    );
};
async function getCertificate() {
    const query = `*[_type == 'certificate']`
    const data = await client.fetch(query)
    return data
}
const Certificate = async () => {
    const data = await getCertificate()
    return (
        <div className=" space-y-4 container">
            {
                data.map((item: any) => (
                    <div key={item.name} className=" bg-rose-700 rounded-xl md:rounded-full p-2 px-4 text-white flex justify-center items-center">
                        
                        <Link href={item.previewUrl} className=" hover:underline" target="blank">
                            <p className="text-lg font-custom">{item.name} from {item.description}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};
async function getEducation() {
    const query = `*[_type == 'education']`
    const data = await client.fetch(query)
    return data
}
const Education = async () => {
    const data = await getEducation()
    return (
        <div className=" space-y-4 container">
            {
                data.map((item: any) => (
                    <div key={item.name} className=" bg-rose-700 rounded-xl md:rounded-full p-2 px-4 text-white flex justify-center items-center">
                            <p className="text-lg font-custom">{item.name} from {item.description}</p>
                    </div>
                ))
            }
        </div>
    );
};
