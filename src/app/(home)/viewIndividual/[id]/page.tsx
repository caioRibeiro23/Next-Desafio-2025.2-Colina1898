import { fetchProdutoById } from "@/actions/individual/actions";
import Botao from "@/components/botaoPadrao/botao";
import AreaFotos from "@/components/produtoInd/areaFotos/areaFotos";
import ClientAction from "@/components/produtoInd/clientAction";
import Selecao from "@/components/produtoInd/selecao/selecao";
import Descricao from "@/components/Texto/descricao";
import TituloMenor from "@/components/Texto/tituloMenor";

export default  async function Page({params}: { params: Promise<{ id: string }>}) {
  const id = parseInt((await params).id, 10);
  const produto = await fetchProdutoById(id);

  return (
    <div className="bg-[url('/fundo/fundoTorcida.jpg')] bg-cover bg-center  bg-black/97 bg-blend-darken flex flex-col items-center justify-center gap-10 py-10 lg:gap-17.5 px-5 w-full">
        <div className="flex flex-col items-center justify-center gap-5 p-2.5 w-full lg:flex-row">
            <AreaFotos imagemPrincipal={produto?.principalImage ?? ""} imagensSecundarias={produto?.secondaryImages ?? []} />
            <div className="flex flex-col items-center justify-center gap-4 lg:gap-6 p-2.5 w-full">
              <h1 className="text-white text-xl bp-540:text-2xl bp-840:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-semibold font-cormorant-sc text-center md:px-20">{produto?.title}</h1>
              <p className="text-white text-xl bp-540:text-2xl bp-840:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold font-cormorant-sc text-center md:p-5">R$ {(produto?.price ?? 0).toFixed(2)}</p>
              {produto?.type === "VESTUARIO" && <Selecao />}
              <ClientAction produto={produto} />
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 py-2.5 md:px-40 w-full">
          <TituloMenor texto="Descrição do Produto" />
          <Descricao texto={produto?.description}></Descricao>
        </div>
    </div>
  );
}   