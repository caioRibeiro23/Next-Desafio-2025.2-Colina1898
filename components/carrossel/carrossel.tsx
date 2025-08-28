import Produto from "../produto/produto";

export default function Carrossel() {
    return (
        <div className="px-5 w-full">
            <div className="flex flex-col px-2.5 py-7.5 gap-5 md:gap-7.5 w-full items-center justify-center bg-cinza/60 rounded-xl">
                <h1 className="text-dourado text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold text-center font-cormorant-sc">Veja Nossos Destaques</h1>
                {/*Carrossel*/}
                <div className="w-full flex flex-col  items-center justify-center py-2.5 gap-7.5 md:flex-row">
                    <i className="bi bi-chevron-compact-up text-dourado text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl md:rotate-270"></i>
                    <div className="flex flex-col items-center justify-center gap-15 md:gap-19 md:flex-row">
                        <Produto temDesc={false} />
                        <Produto temDesc={false} />
                    </div>
                    <i className="bi bi-chevron-compact-down text-dourado text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl md:rotate-270"></i>
                </div>
            </div>
        </div>
    );
}
