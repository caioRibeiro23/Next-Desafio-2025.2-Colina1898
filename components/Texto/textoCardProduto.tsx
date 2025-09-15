export default function TextoCardProduto({texto}: { texto: string }) {
    return (
            <span className="text-white text-base bp-540:text-lg bp-840:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium font-cormorant-sc text-center">{texto}</span>
    );  
}