import { getProdutos } from "@/actions/gerenciamento/actions";
import { fetchFilterProdutos } from "@/actions/search/actions";
import Search from "@/components/listaProdutos/search/search";
import Paginacao from "@/components/paginacao/paginacao";
import Produto from "@/components/produto/produto";

export default async function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const rawQuery = searchParams?.query;
    const query = Array.isArray(rawQuery)? rawQuery[0] ?? "": rawQuery ?? "";
    const currentPage = Number(searchParams?.page) || 1;

    const { produtos, count, totalPages } = await fetchFilterProdutos(query, currentPage);

    return (
        <div className="bg-[url('/fundo/fundoTorcida.jpg')] bg-cover bg-center  bg-black/97 bg-blend-darken flex flex-col items-center justify-center py-12.5 gap-12.5 md:py-20 md:gap-20 w-full">
            <Search />
            {/* <span className="text-white text-start w-full">{count} produtos encontrados</span> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 3xl:grid-cols-6 justify-between gap-y-17.5 gap-x-22.5 items-stretch">
            {produtos.map((produto) => (
                <Produto key={produto.id} produto={produto} temDesc={true} />
            ))}
            </div>
            {totalPages>1 && 
                (<Paginacao totalPages={totalPages} />)}
        </div>
        
    );
}