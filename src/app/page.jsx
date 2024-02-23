import Image from "next/image";
const Homepage = () => {
  return <><div className="h-full flex flex-col lg:flex-row  px-4 sm:px-8 md:px-16 lg:px-24 xlg:px-48 ">
  {/* image */}
  <div className="h-1/2 lg:h-full lg:w-1/2 relative p-4">
    <Image src="/hero.png" alt="" fill className="object-contain"/>
  </div>
   <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center gap-6 p-4">
    <h1 className=" xsm:text-xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold ">Crafting Digital Experience,Developing Tomorrow.</h1>
    <p className="font-semibold md:text-lg ">WelCome To Digital Experience, Where Innovation and Creativity converge,With keen eyes for Aesthetics and a mastery of code, My PortFolio Showcase a diverse collection Projects of that Reflect my Commitment and Excellence </p> 
{/* button */} 
    <div className=" w-full flex gap-6">
    <button className="rounded-md font-semibold p-2 text-white bg-red-500  shadow-xl">View My Work</button>
    <button className="rounded-md shadow-xl p-2 font-semibold">Contact Me</button>
    </div>
   </div>
   </div>
   </>

};

export default Homepage;
