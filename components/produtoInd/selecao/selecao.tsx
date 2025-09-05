import BotaoSelecao from "./botaoSelecao";

export default function Selecao(){
    return (
    <div>
        <div className="flex flex-col items-center justify-center gap-2.5 p-2.5 w-full">
            <h1 className="text-white text-center text-lg bp-540:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-cormorant-sc font-semibold ">Escolha o Tamanho:</h1>
            <div className="flex gap-2.5 p-2.5">
                <BotaoSelecao texto="PP" />
                <BotaoSelecao texto="P" />
                <BotaoSelecao texto="M" />
                <BotaoSelecao texto="G" />
                <BotaoSelecao texto="GG" />
            </div>

        </div>
    </div>
    );
}