
export default function SobreNos({ titulo, texto }: { titulo: string; texto: string }) {
    return (
        <div className="bg-[url('/fundo/fundoCardSobre.jpg')] bg-cover bg-center bg-black/90 bg-blend-darken flex flex-col items-center justify-start p-2.5 rounded-2xl border-dourado border-2 gap-2.5 w-50 sm:w-65 bp-540:w-70 md:w-55 bp-840:w-65 lg:w-80 xl:w-85 3xl:w-90 ">
            <div className="flex flex-col items-center justify-center gap-2.5 w-full p-2.5">
                <h1 className="text-dourado p-2.5 font-semibold text-center font-cormorant-sc text-2xl bp-540:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">{titulo}</h1>
                <p className="whitespace-pre-line text-white text-center font-medium font-cormorant-sc p-2.5 text-lg bp-540:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">{texto}</p>
            </div>
        </div>
    );
}
