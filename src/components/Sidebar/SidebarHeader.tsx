import Link from 'next/link'
import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'

interface SidebarHeaderProps{
    sidebarTrigger : any
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}

const SidebarHeader:React.FC<SidebarHeaderProps> = ({sidebarTrigger, sidebarOpen, setSidebarOpen}) => {
  return (
    <>
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
            <Link href="/" className="text-white text-2xl ">
                Apex Holding Ltd
            </Link>

            <button
                ref={sidebarTrigger}
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-controls="sidebar"
                aria-expanded={sidebarOpen}
                className="block lg:hidden"
            >
                <LiaTimesSolid className="w-6 h-6 text-slate-500"/>
            </button>
        </div>
    </>
  )
}

export default SidebarHeader