'use client'

import Link from "next/link";
import Image from "next/image";
import { BotaoLogin } from "../botaoLogin/botaoLogin";
import { use, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/produtos", label: "Produtos" },
  { href: "/contato", label: "Contato" },
  { href: "/gerenciamento", label: "Gerenciamento" },
  { href: "/carrinho", label: "Carrinho" }
];

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <header className="bg-[url('/fundo/fundoTorcida.jpg')] bg-cover bg-center bg-black/80 bg-blend-darken text-white top-0 z-20 w-full px-10 pt-2 pb-1 gap-2.5">
            <div className="flex flex-wrap items-center justify-between pb-0 pt-0 w-full bp-540:px-5">
                <Link href='/' className = "flex gap-4 items-center">
                    <Image
                        src={'/logo/logo.png'}
                        alt="Logo do Vasco da Gama"
                        width={904}
                        height={904}
                        className="w-25 h-15 bp-540:w-36 bp-540:h-20 md:w-32 md:h-18 lg:w-40 lg:h-23 xl:w-50 xl:h-28 2xl:w-60 2xl:h-36 3xl:w-70 3xl:h-40 object-contain"
                    />
                </Link>
                <div>
                    <span className="font-cormorant-sc text-white hidden md:block md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold [-webkit-text-stroke:1px_var(--color-dourado)] w-full">A Loja do Gigante</span>
                </div>
                <div className="items-center justify-end hidden md:flex">
                    <BotaoLogin></BotaoLogin>
                    
                </div>
                <div className="md:hidden">
                    {isNavOpen ?
                    <i className="bi bi-x text-3xl" onClick={toggleNav}></i> 
                    :
                    <div className="flex gap-4">
                        <i className="bi bi-list text-2xl bp-540:text-3xl" onClick={toggleNav}></i>
                    </div>}
                </div>

                {isNavOpen && (
                    <div className="md:hidden flex basis-full flex-col items-center gap-6 pb-6 ">
                        {links.map((link, index) => (
                            <Link key={index} href={link.href} className="text-white hover:text-dourado px-2.5">
                                <span className=" font-merriweather font-normal text-sm bp-540:text-base  xl:text-lg 2xl:text-xl 3xl:text-2xl">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                )}

            </div>
            <nav className="hidden items-center justify-center pt-0 pb-2.5 gap-2.5 md:flex">
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className="text-white hover:text-dourado px-2.5">
                        <span className=" font-merriweather font-normal text-sm bp-540:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl">{link.label}</span>
                    </Link>
                ))}
            </nav>

            
        </header>
    );
}
