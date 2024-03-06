import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { client } from "../../lib/Sanity";


const Sticky = () => {
  return (
    <div className="container h-screen" id="MyWorks">
      <h1 className=" my-4 mb-20 font-bold text-4xl font-custom text-center ">My Works</h1>
      <div className="grid lg:grid-cols-2 grid-rows-2 lg:gap-2">
        <div>
          <p className="text-xl my-4">Web development</p>
          <Webdevelopment/>
        </div>
        <div>
          <p className="text-xl my-4">ML and Data analytics</p>
          <MachineLearning/>
        </div>
      </div>
      
    </div>
  );
}

export default Sticky

async function getDataWeb() {
  const query = `*[_type == 'projectWeb']`
  const data = await client.fetch(query)
  return data;
}
const Webdevelopment = async () => {
  const data = await getDataWeb()
  return (
    <>
    <StickyScroll content={data} />
    </>
  );
};
async function getDataMl() {
  const query = `*[_type == 'projectMl']`
  const data = await client.fetch(query)
  return data;
}
const MachineLearning = async () => {
  const data = await getDataMl()
  return (
    <>
    <StickyScroll content={data} />
    </>
  );
};