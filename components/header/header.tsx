import Link from "next/link";
import Image from "next/image";
import { BotaoLogin } from "../botaoLogin/botaoLogin";

const links = [
  { href: "/", label: "Home" },
  { href: "/produtos", label: "Produtos" },
  { href: "/contato", label: "Contato" },
  { href: "/gerenciamento", label: "Gerenciamento" },
  { href: "/carrinho", label: "Carrinho" }
];

export default function Header() {
  return (
    <header className="bg-[url('/fundo/fundoTorcida.jpg')] bg-cover bg-center bg-black/80 bg-blend-darken text-white p-4 sticky top-0 z-20 w-full px-5 py-0 gap-2.5">
        <div className="flex flex-wrap items-center justify-between px-10 pb-0 pt-2.5 w-full">
            <Link href='/' className = "flex gap-4 items-center">
                <Image
                    src={'/logo/logo.png'}
                    alt="Logo do Vasco da Gama"
                    width={904}
                    height={904}
                    className="w-50 h-28.5"
                />
            </Link>
            <div>
                <span className="font-cormorant-sc text-white hidden md:block text-4xl font-semibold [-webkit-text-stroke:1px_var(--color-dourado)] w-full">A Loja do Gigante</span>
            </div>
            <div className="items-center justify-end w-50 hidden md:flex">
                <BotaoLogin></BotaoLogin>
                
            </div>
        </div>
        <div className="flex items-center justify-center pt-0 pb-2.5 gap-2.5">
            {links.map((link, index) => (
                <Link key={index} href={link.href} className="text-white hover:text-dourado px-2.5">
                    <span className=" font-merriweather font-normal">{link.label}</span>
                </Link>
            ))}
        </div>
    </header>
  );
}
