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
        <header className="bg-[url('/fundo/fundoTorcida.jpg')] bg-cover bg-center bg-black/80 bg-blend-darken text-white p-4 top-0 z-20 w-full px-5 py-0 gap-2.5">
            <div className="flex flex-wrap items-center justify-between px-5 pb-0 pt-2.5 w-full bp-540:px-10">
                <Link href='/' className = "flex gap-4 items-center">
                    <Image
                        src={'/logo/logo.png'}
                        alt="Logo do Vasco da Gama"
                        width={904}
                        height={904}
                        className="w-36 h-20 bp-540:w-36 bp-540:h-20 md:w-42 md:h-24 lg:w-50 lg:h-28.5"
                    />
                </Link>
                <div>
                    <span className="font-cormorant-sc text-white hidden bp-840:block text-4xl font-semibold [-webkit-text-stroke:1px_var(--color-dourado)] w-full">A Loja do Gigante</span>
                </div>
                <div className="items-center justify-end w-50 hidden bp-840:flex">
                    <BotaoLogin></BotaoLogin>
                    
                </div>
                <div className="bp-840:hidden">
                    {isNavOpen ?
                    <i className="bi bi-x text-3xl" onClick={toggleNav}></i> 
                    :
                    <div className="flex gap-4">
                        <i className="bi bi-list text-3xl" onClick={toggleNav}></i>
                    </div>}
                </div>

                {isNavOpen && (
                    <div className="bp-840:hidden flex basis-full flex-col items-center gap-6 pb-6 ">
                        {links.map((link, index) => (
                            <Link key={index} href={link.href} className="text-white hover:text-dourado px-2.5">
                                <span className=" font-merriweather font-normal ">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                )}

            </div>
            <nav className="hidden items-center justify-center pt-0 pb-2.5 gap-2.5 bp-840:flex">
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className="text-white hover:text-dourado px-2.5">
                        <span className=" font-merriweather font-normal">{link.label}</span>
                    </Link>
                ))}
            </nav>

            
        </header>
    );
}
