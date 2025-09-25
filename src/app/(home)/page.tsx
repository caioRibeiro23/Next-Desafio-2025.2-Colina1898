import getLancamentos from "@/actions/home/actions";
import Carrossel from "@/components/carrossel/carrossel";
import HeroSection from "@/components/herosection/heroSection";
import SobreNos from "@/components/sobreNosCard/sobreNosCard";
import { getIdentities } from "@/src/lib/api/getMVV";

export const dynamic = 'force-dynamic'; //ajuste de erro no deploy

export default async function Home() {
  const produtos = await getLancamentos();
  try {
    const data = await getIdentities();

  return (
    <div className="flex flex-col items-center justify-center w-full gap-15 py-15 md:gap-20 md:py-20 bg-black">
      <HeroSection />
      <Carrossel produtos={produtos} />
      <div className="flex flex-col px-2.5 py-7.5 gap-5 md:gap-7.5 w-full items-center justify-center">
        <h1 className="text-dourado text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold text-center font-cormorant-sc">Sobre Nós</h1>
        <div className="w-full flex flex-col justify-center py-2.5 gap-10 md:flex-row items-center md:items-stretch">
            {data.map((item) => (
              <SobreNos key={item.id} titulo={item.title} texto={item.text} />
            ))}
        </div>
      </div>
    </div>
  );
  } catch (error) {
    console.error("Erro ao buscar dados de identidade:", error);
  }
}
