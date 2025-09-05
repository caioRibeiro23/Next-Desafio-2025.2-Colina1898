export default function TituloMaior({ texto }: { texto: React.ReactNode }) {
    return (
        <h1 className="text-dourado text-4xl bp-540:text-5xl bp-840:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 3xl:text-10xl font-medium font-cormorant-sc text-center">
            {texto}
        </h1>
    );
}