import Link from "next/link";

type BotaoPaginacaoProps = {
    texto: React.ReactNode;
    href: string;
    className?: string;
};

export default function BotaoPaginacao({ texto ,href, className }: BotaoPaginacaoProps) {
    return (
        <Link href={href}>
            <button className={`rounded-[200px] drop-shadow-[0_4px_4px_black] px-3.5 py-1.5 font-merriweather font-bold text-sm bp-540:text-lg md:text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl sm:px-4 bp-540:px-5 md:px-5 md:py-1.5 xl:px-7.5 xl:py-3.5 2xl:px-9 2xl:py-4 3xl:px-10 3xl:py-5 cursor-pointer ${className || " bg-dourado  text-black border border-transparent hover:bg-black/20 hover:text-dourado hover:border-dourado hover:backdrop-blur-sm transition-colors duration-500"}`}>
                {texto}
            </button>
        </Link>
    );
}
