"use client"

import Navbar from "./Navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation";

const PagesAnimation=({children})=>{
    const pathName=usePathname()
    return(
        <AnimatePresence mode="wait">
    <div key={pathName} className="">
    <motion.div
        className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
        animate={{height:"0vh" }}
        exit={{height:"140vh"}}
        transition={{duration:0.5, ease:"easeOut"}}
      />
       <motion.div
        className="fixed m-auto top-0 bottom-0 left-0 right-0 cursor-default text-red-500 text-8xl w-fit h-fit z-50"
        initial={{opacity:1}}
        animate={{opacity:0,transitionEnd: {
          display: "none",
        }}}
        exit={{transitionEnd: {
          display: "none",
        },}}
        transition={{duration:0.8, ease:"easeOut"}}
      >{pathName.substring(1)}</motion.div>
      <motion.div
        className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
        initial={{height:"140vh"}}
        animate={{height:"0vh", transition:{delay:0.5} }}
      />
       <div className="h-24">
      <Navbar/>
      </div>
      <div className="h-[calc(100vh-6rem)]">

      {children}
      </div>
    </div>
    </AnimatePresence>
    )
}
export default PagesAnimation