/* eslint-disable react/jsx-key */
import Link from 'next/link'
import { useState } from 'react'
import {MoonIcon , SunIcon} from "@heroicons/react/solid"
import useDarkMode from '../useDarkMode';




function NavLink({to, children}) {
    return <Link href={to}><a className={`mx-4`}>
        {children}
    </a></Link>
}

function MobileNav({open, setOpen}) {

  const [colorTheme ,setTheme] = useDarkMode();


    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white dark:bg-blue-300 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <Link href="/"><a className="text-xl font-semibold">LetsConnect</a></Link>
            </div>
            <div className="flex flex-col ml-4">
                <Link href="/"><a className="text-xl font-medium my-4"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </a>
                </Link>
                <Link href="/about"><a className="text-xl font-medium my-4"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                </Link>
                <Link href="/contact"><a className="text-xl font-normal my-4"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
                </Link>
                {colorTheme === "light" ?(
                <SunIcon className='w-10 h-15 flex flex-row-reverse' role="button" onClick={()=>setTheme("light")} />
            ):(
                <MoonIcon className='w-10 h-15' role="button" onClick={()=>setTheme("dark")} />
            )}
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [colorTheme ,setTheme] = useDarkMode();
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-white dark:bg-blue-300 px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <Link href="/"><a className="text-2xl font-semibold" >LetsConnect</a></Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/">
                        HOME
                    </NavLink>
                   
                    <NavLink to="/about">
                        ABOUT
                    </NavLink>

                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>

                    {colorTheme === "light" ?(
                        <SunIcon className='w-10 h-15 flex flex-row-reverse' role="button" onClick={()=>setTheme("light")} />
                        ):(
                        <MoonIcon className='w-10 h-15' role="button" onClick={()=>setTheme("dark")} />
                    )}
                </div>
            </div>
        </nav>
    )
}