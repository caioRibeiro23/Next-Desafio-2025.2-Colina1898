export default function TituloGerenciamento({ texto }: { texto: string }) {
    return (
        <h1 className="text-2xl bp-540:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl text-dourado font-cormorant-sc font-bold text-center">{texto}</h1>
    );  
}