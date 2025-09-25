import getLancamentos from "@/actions/home/actions";
import Carrossel from "@/components/carrossel/carrossel";
import HeroSection from "@/components/herosection/heroSection";
import SobreNos from "@/components/sobreNosCard/sobreNosCard";

export const dynamic = 'force-dynamic'; //ajuste de erro no deploy

export default async function Home() {
  const produtos = await getLancamentos();
  return (
    <div className="flex flex-col items-center justify-center w-full gap-15 py-15 md:gap-20 md:py-20 bg-black">
      <HeroSection />
      <Carrossel produtos={produtos} />
      <div className="flex flex-col px-2.5 py-7.5 gap-5 md:gap-7.5 w-full items-center justify-center">
        <h1 className="text-dourado text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold text-center font-cormorant-sc">Sobre Nós</h1>
        <div className="w-full flex flex-col justify-center py-2.5 gap-10 md:flex-row items-center md:items-stretch">
            <SobreNos titulo="Missão" texto="Nossa missão é honrar a história e o legado da Colina, criando produtos de alta qualidade que traduzem a paixão e o orgulho vascaíno. Conectamos os torcedores com a essência do clube, oferecendo itens que representam mais do que uma marca: representam uma identidade." />
            <SobreNos titulo="Visão" texto="Ser a principal referência para os apaixonados por futebol, reconhecida pela excelência, inovação e pela forma como celebramos a tradição vascaína. Buscamos ser o ponto de encontro da história e do futuro, expandindo nosso legado para novas gerações." />
            <SobreNos titulo="Valores" texto={`Tradição: Respeito à história e ao legado de 1898.\nPaixão: O sentimento que move a todos na Colina.\nExcelência: Busca incessante pela qualidade em cada produto.\nResiliência: A força e a garra para superar desafios.`} />
        </div>
      </div>
    </div>
  );
}
