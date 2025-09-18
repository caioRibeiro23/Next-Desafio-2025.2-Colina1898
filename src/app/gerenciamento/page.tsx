import Botao from "@/components/botaoPadrao/botao";
import Paginacao from "@/components/paginacao/paginacao";
import CardProduto from "@/components/produto/cardProduto";
import Sidebar from "@/components/sidebar/sidebar";
import TextoCardProduto from "@/components/Texto/textoCardProduto";
import LinhaProduto from "@/components/gerenciamento/tabela/linhaProduto";
import TituloGerenciamento from "@/components/Texto/tituloGerenciamento";
import Link from "next/link";

export default function GerenciamentoPage() {
  return (
    <div className="w-full flex">
        {/* div de gerenciamento */}
        <div className="bg-[url('/fundo/fundoLogin.jpg')] bg-cover bg-center bg-black/80 bg-blend-darken flex flex-col items-center justify-center w-full gap-2.5 p-5">
        {/* topo - pré tabela */}
          <div className="flex justify-between items-center p-2.5 w-full">
            <TituloGerenciamento texto="Gerenciamento de Produtos" />
            <Link href="/gerenciamento/criar">
                <Botao texto={<div className="flex gap-2.5"><i className="bi bi-plus-square-fill"></i><p>Criar Produto</p></div>} />
            </Link>
          </div>
          
          <table className="min-w-full border-separate border-spacing-y-2.5">
            {/* tabela - cabeçalho */}
            <thead>
              <tr className="bg-black/70 grid grid-cols-[1fr_2fr_2.5fr_1fr_2fr] items-center px-4 py-2.5 w-full border border-dourado rounded-4xl">
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
