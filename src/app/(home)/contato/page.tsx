import Formulario from "@/components/formulario/formulario";
import Mapa from "@/components/mapa/mapa";

export default function Page(){
  return (
    <div className="bg-black grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 py-12 lg:gap-17.5 px-5 w-full">
        <div className="flex flex-col items-center justify-center gap-5 p-2.5 w-full">
          <h1 className="text-dourado text-xl bp-540:text-2xl bp-840:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-medium font-cormorant-sc text-center">Precisa de ajuda?</h1>
          <p className="text-white text-lg bp-540:text-xl bp-840:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl px-5 font-medium font-cormorant-sc text-center">Estamos aqui para te atender. Entre em contato e faremos o nosso melhor para te responder o mais rápido possível.</p>
          <Mapa />
        </div>
        <Formulario />
    </div>
  );
}
