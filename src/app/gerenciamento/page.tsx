import Botao from "@/components/botaoPadrao/botao";
import Paginacao from "@/components/paginacao/paginacao";
import CardProduto from "@/components/produto/cardProduto";
import Sidebar from "@/components/sidebar/sidebar";
import TextoCardProduto from "@/components/Texto/textoCardProduto";
import LinhaProduto from "@/components/gerenciamento/tabela/linhaProduto";

export default function GerenciamentoPage() {
  return (
    <div className="w-full flex">
        <div className="hidden md:block">
            <Sidebar />
        </div>
        {/* div de gerenciamento */}
        <div className="bg-[url('/fundo/fundoLogin.jpg')] bg-cover bg-center bg-black/80 bg-blend-darken flex flex-col items-center justify-center w-full gap-2.5 p-5">
        {/* topo - pré tabela */}
          <div className="flex justify-between items-center p-2.5 w-full">
            <h1 className="text-2xl bp-540:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl text-dourado font-cormorant-sc font-bold">Gerenciamento de Produtos</h1>
            <Botao texto={<div className="flex gap-2.5"><i className="bi bi-plus-square-fill"></i><p>Criar Produto</p></div>} />
          </div>
          
          <table className="min-w-full border-separate border-spacing-y-2.5">
            {/* tabela - cabeçalho */}
            <thead>
              <tr className="grid grid-cols-[1fr_2fr_2.5fr_1fr_2fr] items-center px-4 py-2.5 w-full border border-dourado rounded-4xl">
                <th className="flex items-center justify-center ">
                  <TextoCardProduto texto="ID" />
                </th>
                <th className="flex items-center justify-center">
                    <TextoCardProduto texto="Foto" />
                </th>
                <th className="flex items-center justify-center">
                    <TextoCardProduto texto="Nome" />
                </th>
                <th className="flex items-center justify-center w-12">
                    <TextoCardProduto texto="Preço" />
                </th>
                <th className="flex items-center justify-center w-12">
                    <TextoCardProduto texto="Ações" />
                </th>
            </tr>
            </thead>
            {/* tabela - cards */}
            <tbody className="flex flex-col gap-2.5 w-full">
            <LinhaProduto imagem="/produtos/camisa-I.png" nome="Camisa Masculina Home Player 2025" preco={399.90} />
            <LinhaProduto imagem="/produtos/camisa-I.png" nome="Camisa Masculina Away Player 2025" preco={399.90} />
            <LinhaProduto imagem="/produtos/camisa-I.png" nome="Camisa Masculina Third Player 2025" preco={399.90} />
            </tbody>
          </table>
          <Paginacao />
        </div>
    </div>
  );
}
