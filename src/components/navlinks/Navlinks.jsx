"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navlinks=({link})=>{

    const pathName=usePathname()
    return(
    <div className={`rounded ${pathName === link.url ? "bg-red-500 text-white px-1 text-2xl":"text-xl"}  `} >
        <Link href={link.url}>{link.title}</Link>
    </div>
    )
}
export default Navlinks