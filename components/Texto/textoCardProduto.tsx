export default function TextoCardProduto({texto}: { texto: string }) {
    return (
            <span className="text-white text-xs bp-540:text-base bp-840:text-base lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-medium font-cormorant-sc text-center">{texto}</span>
    );  
}