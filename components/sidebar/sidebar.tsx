import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/gerenciamento", label: "Gerenciamento" },
];

export default function Sidebar() {
    return (
        <div className=" bg-black flex flex-col items-center justify-between h-full px-2.5 pt-7.5 pb-15 border-r-2 border-dourado ">
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
        </div>
    );
}