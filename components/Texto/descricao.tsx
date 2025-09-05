export default function Descricao({ texto }: { texto: React.ReactNode }) {
    return (
        <p className="text-white text-base bp-540:text-lg bp-840:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl px-5 font-medium font-cormorant-sc text-center">
            {texto}
        </p>
    );
}