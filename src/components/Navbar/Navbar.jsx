"use client"

import Link from "next/link"
import { useState } from "react"
import Navlinks from "../navlinks/Navlinks"

const Navbar=()=>{
    const [open ,setOpen]= useState(false)
    const menu=[
        {url:"/",title:"Home"},
        {url:"/about",title:"About"},
        {url:"/portfolio",title:"Portfolio"},
        {url:"/contact",title:"Contact"},
    ]
    return(
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xlg:px-48 ">
       
       <div className="hidden md:flex flex-row gap-4  text-xl w-1/3">
        {
            menu.map((link)=>(<Navlinks link={link}/>))
        }
       </div>
        <div className="md:hidden lg:flex">
        <Link href='/' className="text-sm bg-red-500  shadow-lg rounded-md px-2 pr-1 py-1 flex flex-row font-semibold">
            <span className="text-white text-lg flex items-center justify-center p-1">Omkar</span>
            <span className="bg-white rounded-md text-lg p-1">.Dev</span>
            </Link>
        </div>

        <div className="hidden md:flex flex-row justify-center gap-3 w-1/3">
         <Link href="#">
            <img src="/github.png" width={24} height={24}/>
         </Link>
         <Link href="#">
            <img src="/linkedin.png" width={24} height={24}/>
         </Link>
         <Link href="#">
            <img src="/instagram.png" width={24} height={24}/>
         </Link>
         <Link href="#">
            <img src="/hero.png" width={24} height={24}/>
         </Link>


        </div>
        <div className="md:hidden w-10 h-8 flex flex-col justify-between z-50 relative cursor-pointer" onClick={()=>setOpen(!open)}>
            <div className="w-10 h-1 rounded-md bg-white"></div>
            <div className="w-10 h-1 rounded-md   bg-white"></div>
            <div className="w-10 h-1 rounded-md  bg-white"></div>
        </div>
        {
            open && <div className=" absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-10 text-4xl ">
         {menu.map((item)=>(<Link href={item.url} key={item.url}>{item.title}</Link>))}
         
        </div>
        }
        

    </div>
    )
}
export default Navbar