import Carrossel from "@/components/carrossel/carrossel";
import HeroSection from "@/components/herosection/heroSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-15 py-15 md:gap-20 md:py-20 bg-black">
      <HeroSection />
      <Carrossel />
    </div>
  );
}
