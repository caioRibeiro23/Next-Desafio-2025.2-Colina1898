type BotaoProps = {
    texto: React.ReactNode;
};

export default function Botao({ texto }: BotaoProps) {
    return (
        <button className="bg-dourado text-black font-bold font-cormorant-sc p-2.5 rounded-2xl text-sm bp-540:text-base md:text-lg lg:text-2xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl hover:scale-105 transition-transform duration-200 drop-shadow-[0_4px_4px_black] cursor-pointer">
            {texto}
        </button>
    );
}
