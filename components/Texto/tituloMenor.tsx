export default function tituloMenor({ texto }: { texto: string }) {
    return (
        <h1 className="text-dourado text-xl bp-540:text-2xl bp-840:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-medium font-cormorant-sc text-center">
            {texto}
        </h1>
    );
}