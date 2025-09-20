export default function TextoResumo({titulo, valor}: { titulo: string; valor: string }) {
    return (
        <div className="flex items-center justify-between w-full p-2.5">
                    <h2 className="text-white text-base bp-540:text-lg bp-840:text-base lg:text-lg xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium font-cormorant-sc">{titulo}</h2>
                    <span className="text-white text-base bp-540:text-lg bp-840:text-base lg:text-lg xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium font-cormorant-sc">{valor}</span>
                </div>
    );
}