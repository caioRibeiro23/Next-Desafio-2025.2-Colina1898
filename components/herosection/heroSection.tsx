    export default function HeroSection() {
    return (
        <div className= "bg-[url('/fundo/fundoCamisa.jpg')] bg-cover bg-center bg-black/60 bg-blend-darken flex flex-col items-center justify-center gap-11 px-5 py-10 w-full lg:px-15 lg:py-20">
            {/* Texto */}
            <div className="text-center md:text-start xl:text-center w-full flex flex-col  gap-7.5">
                <h1 className="text-white text-4xl bp-540:text-4xl  md:text-5xl bp-840:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold font-cormorant-sc md:pr-40">Um legado centenário. O espírito da Colina em cada detalhe.</h1>
                <p className="text-white w-full text-xl bp-540:text-2xl md:text-3xl bp-840:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold font-cormorant-sc">Vista o Gigante. Carregue a História com Você.</p>
            </div>
            {/* Botão */}
            <a href="./produtos" className="px-2.5 py-2.5 gap-2.5 bg-dourado rounded-lg drop-shadow-[0_4px_5px_black] cursor-pointer hover:scale-105 transition-transform duration-300 xl:px-3 xl:py-3">
                <span className="text-xl bp-540:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-cormorant-sc font-medium">Ver Mais</span>
            </a>
        </div>
    );
    }