type BotaoPaginacaoProps = {
    texto: React.ReactNode;
};

export default function BotaoPaginacao({ texto }: BotaoPaginacaoProps) {
    return (
        <button className="bg-dourado rounded-[200px] drop-shadow-[0_4px_4px_black] px-3.5 py-1.5  text-black font-merriweather font-bold text-sm bp-540:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl border border-transparent sm:px-4 bp-540:px-5 md:px-6.5 md:py-2.5 xl:px-7.5 xl:py-3.5 2xl:px-9 2xl:py-4 3xl:px-10 3xl:py-5 cursor-pointer
         hover:bg-black/20 hover:text-dourado hover:border-dourado hover:backdrop-blur-sm transition-colors duration-500">
            {texto}
        </button>
    );
}
