
import Hero from "./Home/page"
import Lamp from "./WhoAmI/page";
import SCE from "./SC/page";
import Sticky from "./MyWork/page";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
        <div className="h-screen">
          <Hero/>
        </div>
        <div className="h-screen">
          <Lamp/>
        </div>
        <div className="h-screen pt-16" id="SC">
          <SCE/>
        </div>
        <div className="h-screen md:mt-[25vh] mt-[60vh] ">
          <Sticky/>
        </div>
        <div className="h-screen lg:mt-0 md:mt-[30vh] mt-[50vh] ">
          contact
        </div>
    </main>
  );
}
