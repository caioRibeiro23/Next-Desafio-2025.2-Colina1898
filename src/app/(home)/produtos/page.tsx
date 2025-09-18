import Search from "@/components/listaProdutos/search/search";
import Paginacao from "@/components/paginacao/paginacao";
import Produto from "@/components/produto/produto";

export default function Page(){
    return (
        <div className="bg-[url('/fundo/fundoTorcida.jpg')] bg-cover bg-center  bg-black/97 bg-blend-darken flex flex-col items-center justify-center py-12.5 gap-12.5 md:py-20 md:gap-20 w-full">
            <Search />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 3xl:grid-cols-6 justify-between gap-y-17.5 gap-x-22.5">
            <Produto temDesc={true} />
            <Produto temDesc={true} />
            <Produto temDesc={true} />
            <Produto temDesc={true} />
            <Produto temDesc={true} />
            <Produto temDesc={true} />
            </div>
            <Paginacao />
        </div>
        
    );
}