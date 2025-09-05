export default function BotaoSelecao(props: { texto: string }) {
    return (
        <button className="text-white text-sm bp-540:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-semibold font-cormorant-sc  border-1 border-dourado rounded-4xl px-3.5 md:px-6.25 py-1.75 hover:bg-dourado hover:text-black transition-colors duration-200">
            {props.texto}
        </button>
    );
}