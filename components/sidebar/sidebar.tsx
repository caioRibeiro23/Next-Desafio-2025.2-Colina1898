"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/gerenciamento", label: "Gerenciamento" },
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);
    return (
        <div>
            <div className={" bg-black flex flex-wrap items-center justify-between px-2.5 py-3 border-r-2 border-dourado md:hidden"}>
                <div className="flex items-center">
                    <Link href='/' className = "flex items-center">
                        <Image
                            src={'/logo/logo.png'}
                            alt="Logo do Vasco da Gama"
                            width={904}
                            height={904}
                            className="w-25 h-15 bp-540:w-36 bp-540:h-20 md:w-32 md:h-18 lg:w-40 lg:h-23 xl:w-50 xl:h-28 2xl:w-60 2xl:h-36 3xl:w-70 3xl:h-40 object-contain"
                        />
                    </Link>
                </div>
                <div>
                    <i className="bi bi-list text-2xl bp-540:text-3xl text-white" onClick={toggleSidebar}></i>
                </div>
            </div>
            <aside className={'fixed top-0 left-0 z-40 w-full md:w-61 transition-transform duration-300 md:translate-x-0 md:border-r-2 md:border-dourado md:static' + (isOpen ? '-translate-x-0 ' : ' -translate-x-full')}>
                <div className=" bg-black flex flex-col items-center h-screen px-2.5 py-2.5 overflow-y-auto">
                    <div className="flex flex-row items-center justify-between md:justify-center w-full">
                        <Link href='/' className = "flex items-center">
                            <Image
                                src={'/logo/logo.png'}
                                alt="Logo do Vasco da Gama"
                                width={904}
                                height={904}
                                className="w-25 h-15 bp-540:w-36 bp-540:h-20 md:w-32 md:h-18 lg:w-40 lg:h-23 xl:w-50 xl:h-28 2xl:w-60 2xl:h-36 3xl:w-70 3xl:h-40 object-contain"
                            />
                        </Link>
                        <i className="bi bi-x text-3xl text-white md:hidden" onClick={toggleSidebar}></i>
                    </div>
                    <div className="h-[1px] bg-dourado w-full my-2 md:bg-transparent"/>
                    <ul className="space-y-2.5 w-full">
                        {links.map((link, index) => (
                            <li key={index} className="w-full">
                                <Link href={link.href} className={`text-dourado px-2.5 w-full ${link.label === "Gerenciamento" ? "bg-gradient-to-r from-cinzaEscuro to-pretoSuave border-l-2 border-dourado" : "hover:bg-gradient-to-r hover:from-cinzaEscuro hover:to-pretoSuave"} transition-colors duration-200 p-2 block`}>
                                    <span className="text-start font-cormorant-sc font-normal text-sm bp-540:text-base lg:text-2xl xl:text-xl 2xl:text-2xl 3xl:text-3xl">{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="h-full flex items-end pb-10">
                        <button className="text-dourado px-2.5 py-2 rounded-2xl border-2 border-dourado hover:scale-105 transition-transform duration-200 drop-shadow-[0_4px_4px_black] cursor-pointer hover:bg-dourado hover:text-black group">
                            <div className="flex gap-2.5 items-center">
                                <i className="bi bi-door-open text-dourado text-sm bp-540:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-medium group-hover:text-black"></i>
                                <span className="font-semibold font-cormorant-sc text-sm bp-540:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">Logout</span>
                            </div>
                        </button>
                    </div>
                </div>
            </aside>
        {/* <div className=" bg-black flex flex-col items-center justify-between h-full px-2.5 pt-7.5 pb-15 border-r-2 border-dourado ">
            <Link href='/' className = "flex items-center">
                    <Image
                        src={'/logo/logo.png'}
                        alt="Logo do Vasco da Gama"
                        width={904}
                        height={904}
                        className="w-25 h-15 bp-540:w-36 bp-540:h-20 md:w-32 md:h-18 lg:w-40 lg:h-23 xl:w-50 xl:h-28 2xl:w-60 2xl:h-36 3xl:w-70 3xl:h-40 object-contain"
                    />
                </Link>
            <nav className="flex flex-col items-center justify-start py-15 h-full">
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className={`text-dourado px-2.5 w-full ${link.label === "Gerenciamento" ? "bg-gradient-to-r from-cinzaEscuro to-pretoSuave border-l-2 border-dourado" : "hover:bg-gradient-to-r hover:from-cinzaEscuro hover:to-pretoSuave"} transition-colors duration-200 p-2`}>
                        <span className="text-start font-cormorant-sc font-normal text-sm bp-540:text-base lg:text-2xl xl:text-xl 2xl:text-2xl 3xl:text-3xl">{link.label}</span>
                    </Link>
                ))}
            </nav>  
            <button className="text-dourado px-2.5 py-2 rounded-2xl border-2 border-dourado hover:scale-105 transition-transform duration-200 drop-shadow-[0_4px_4px_black] cursor-pointer hover:bg-dourado hover:text-black group">
                <div className="flex gap-2.5 items-center">
                    <i className="bi bi-door-open text-dourado text-sm bp-540:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-medium group-hover:text-black"></i>
                    <span className="font-semibold font-cormorant-sc text-sm bp-540:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">Logout</span>
                </div>
            </button>
        </div>*/}
        </div> 
    );
}