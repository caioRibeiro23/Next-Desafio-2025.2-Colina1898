type BotaoProps = {
    texto: React.ReactNode;
    onClick?: () => void;
};

export default function Botao({ texto, onClick }: BotaoProps) {
    return (
        <button onClick={onClick} className="bg-dourado text-black font-bold font-cormorant-sc p-2.5 rounded-2xl text-xs bp-540:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl hover:scale-105 transition-transform duration-200 drop-shadow-[0_4px_4px_black] cursor-pointer">
            {texto}
        </button>
    );
}
