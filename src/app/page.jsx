"use client"
import Image from "next/image";
import {motion} from 'framer-motion'
import Link from "next/link";
const Homepage = () => {
  return (
  <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
  <div className="h-full flex flex-col  lg:flex-row  px-4 sm:px-8 md:px-16 lg:px-24 xlg:px-48 ">
  {/* image */}
  <div className="h-1/2 lg:h-full lg:w-1/3 relative p-4">
    <Image src="/home.svg" alt="" fill className="object-contain rounded-xl "/>
  </div>
   <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center gap-6 p-4">
    <h1 className=" xsm:text-xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold ">Crafting Digital Experience,Developing Tomorrow.</h1>
    <p className="font-semibold md:text-lg ">Welcome To Digital Experience, Where Innovation and Creativity converge,With keen eyes for Aesthetics and a mastery of code, My PortFolio Showcase a diverse collection Projects of that Reflect my Commitment and Excellence </p> 
{/* button */} 
    <div className=" w-full flex gap-6">
    <Link href='/portfolio'> <button className="rounded-md font-semibold p-2 text-white bg-red-500  shadow-xl">View My Work</button></Link>
    <Link href='/contact'><button className="rounded-md shadow-xl p-2 font-semibold">Contact Me</button></Link>
    </div>
   </div>
   </div>
   </motion.div> )

};

export default Homepage;
