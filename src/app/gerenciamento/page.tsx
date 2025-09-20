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
    <div className="w-full flex md:h-screen ">
        {/* div de gerenciamento */}
        <div className="bg-[url('/fundo/fundoLogin.jpg')] bg-cover bg-center bg-black/80 bg-blend-darken flex flex-col justify-start w-full gap-2.5 p-5 items-center h-full">
        {/* topo - pré tabela */}
          <div className="flex flex-col gap-2.5 justify-center lg:flex-row lg:justify-between items-center p-2.5 w-full">
            <TituloGerenciamento texto="Gerenciamento de Produtos" />
            <Link href="/gerenciamento/acoes/criar">
                <Botao texto={<div className="flex gap-2.5"><i className="bi bi-plus-square-fill"></i><p>Criar Produto</p></div>} />
            </Link>
          </div>
         
          <div className="flex flex-col w-full gap-2.5 p-2.5">
            {/* tabela - cabeçalho */}
              <div className=" grid grid-cols-[1fr_2.5fr_2fr_1fr] bp-840:grid-cols-[1fr_1fr_2.5fr_1fr_2fr] items-center justify-center py-2.5 w-full border border-dourado rounded-4xl bg-black/70">
                <div className="flex items-center justify-center px-4">
                  <TextoCardProduto texto="ID" />
                </div>
                <div className="hidden items-center justify-center px-4 bp-840:flex">
                    <TextoCardProduto texto="Foto" />
                </div>
                <div className="flex items-center justify-center px-4">
                    <TextoCardProduto texto="Nome" />
                </div>
                <div className="flex items-center justify-center px-4">
                    <TextoCardProduto texto="Preço" />
                </div>
                <div className="flex items-center justify-center px-4">
                    <TextoCardProduto texto="Ações" />
                </div>
            </div>
            {/* tabela - cards */}
            <div className="flex flex-col gap-2.5 w-full">
            <LinhaProduto imagem="/produtos/camisa-I.png" nome="Camisa Masculina Home Player 2025" preco={399.90} />
            <LinhaProduto imagem="/produtos/camisa-I.png" nome="Camisa Masculina Away Player 2025" preco={399.90} />
            <LinhaProduto imagem="/produtos/camisa-I.png" nome="Camisa Masculina Third Player 2025" preco={399.90} />
            </div>
          </div>
          <Paginacao />
        </div>
    </div>
  );
}



