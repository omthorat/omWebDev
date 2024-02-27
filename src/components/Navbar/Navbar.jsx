"use client"

import Link from "next/link"
import { useState } from "react"
import Navlinks from "../navlinks/Navlinks"
import {motion} from "framer-motion"
import Image from "next/image"
const Navbar=()=>{
    const [open ,setOpen]= useState(false)
    
   const topVarients={
    opened: {
     rotate:45,
     backgroundColor:"rgb(255,255,255)"
    },
    closed: {
     rotate:0,
    }
   }
   const middleVarients={
    opened: {
     opacity:0
    },
    closed: {
        opacity:1
    }
   }
   const bottomVarients={
    opened: {
     rotate:-45,
     backgroundColor:"rgb(255,255,255)"
    },
    closed: {
     rotate:0
    }
   }
   const listVarients ={
    closed:{
     x:"100vw"
    },
    opened: {
    x:0,
    transition: {
        when:"beforeChildren",
        staggerChildren: 0.2,
    }
    }
   }
   const listitemVarients ={
    closed: {
     x: -10,   
     opacity:0
    },
    opened: {
    x: 0,
    opacity:1
    }
   }

    const menu=[
        {url:"/",title:"Home"},
        {url:"/about",title:"About"},
        {url:"/portfolio",title:"Portfolio"},
        {url:"/contact",title:"Contact"},
    ]
    return(
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xlg:px-48 ">
       
       <div className="hidden md:flex flex-row gap-4  text-xl w-1/3 ">
        {
            menu.map((link)=>(<Navlinks link={link}/>))
        }
       </div>
        <div className="md:hidden xl:flex">
        <Link href='/' className="text-sm  rounded-md px-2 pr-1 py-1 flex flex-row font-semibold ">
            {/* <span className="text-white text-lg flex items-center justify-center p-1">Omkar</span>
            <span className="bg-white rounded-md text-lg p-1">.Dev</span> */}
            <Image src="/logo-removebg-preview (1).png" width={300} height={100}/>
            </Link>
        </div>

        <div className="hidden md:flex flex-row justify-center gap-3 w-1/3">
         <Link href="https://github.com/omthorat/" target="blank">
            <img src="/github.png" width={24} height={24}/>
         </Link>
         <Link href="#" target="blank">
            <img src="/linkedin.png" width={24} height={24}/>
         </Link>
         <Link href="#">
            <img src="/instagram.png" width={24} height={24}/>
         </Link>
         <Link href="/" target="blank">
            <img src="/home.svg" width={24} height={24}/>
         </Link>


        </div>
        <div className="md:hidden w-10 h-8 flex flex-col justify-between z-50 cursor-pointer" onClick={()=>setOpen(!open)}>
            <motion.div variants={topVarients} animate={open?"opened": "closed"} className="w-10 h-1 rounded-md bg-black origin-left"></motion.div>
            <motion.div variants={middleVarients} animate={open?"opened": "closed"}  className="w-10 h-1 rounded-md   bg-black origin-left"></motion.div>
            <motion.div variants={bottomVarients} animate={open?"opened": "closed"}  className="w-10 h-1 rounded-md  bg-black origin-left"></motion.div>
        </div>
        {
            open && <motion.div variants={listVarients} initial="closed"  animate="opened" className=" absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-10 text-4xl z-40 ">
         {menu.map((item)=>(
           <motion.div variants={listitemVarients} key={item.url}  className="">
           <Link href={item.url}>{item.title}</Link>
           </motion.div>))}
         
        </motion.div>
        }
        

    </div>
    )
}
export default Navbar