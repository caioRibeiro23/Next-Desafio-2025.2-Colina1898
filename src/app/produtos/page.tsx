import Search from "@/components/listaProdutos/search/search";

export default function Page(){
    return (
        <div className="bg-[url('/fundo/fundoTorcida.jpg')] bg-cover bg-center  bg-black/95 bg-blend-darken flex flex-col items-center justify-center py-12.5 gap-12.5 md:py-20 md:gap-20 w-full">
            <Search />
        </div>
    );
}