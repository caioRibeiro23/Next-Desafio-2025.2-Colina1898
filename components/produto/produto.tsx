import { Link } from "lucide-react";
import Image from "next/image";


export default function Produto({ temDesc }: {temDesc: boolean}){
    return (
        <a href="/viewIndividual" className={`group flex flex-col items-center justify-center p-2.5 rounded-2xl border-dourado border-2 gap-2.5 w-45 sm:w-55 bp-540:w-70 md:w-55 bp-840:w-65 lg:w-75 xl:w-85 3xl:w-90 hover:scale-105 transition-all duration-200 cursor-pointer drop-shadow-[0_4px_4px_black]
        ${temDesc ? "bg-[url('/produtos/fundoProduto.png')] bg-cover bg-center bg-black/80 bg-blend-darken w-55 sm:w-70 bp-540:w-80 md:w-70 bp-840:w-75 lg:w-80 xl:w-100 2xl:w-85 3xl:w-120 hover:scale-105" : "bg-pretoSuave"}`}>
            <div className="relative w-full">
                <Image 
                src="/produtos/camisa-I.png" 
                alt="Camisa do Vasco da Gama" 
                width={360}
                height={360}
                className="w-full h-full object-cover rounded-2xl"/>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <div className="flex items-center justify-center bg-dourado rounded-2xl p-2.5 drop-shadow-2xl">
                        <p className="text-black font-medium font-cormorant-sc text-2xl">Ver mais</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2.5 w-full p-2.5">
                <h1 className="text-white p-2.5 font-medium text-center font-cormorant-sc text-xl bp-540:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl ">Camisa Masculina Home Player 2025</h1>
                <p className="text-white text-center p-2.5 font-bold font-cormorant-sc text-xl bp-540:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">R$ 399,90</p>
                {temDesc && <p className="text-white p-2.5 text-center font-medium font-cormorant-sc text-sm sm:text-lg bp-540:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">Com design inovador e tecnologia de ponta, esta é a mesma camisa utilizada pelos jogadores em campo.  </p>}
            </div>
        </a>
    );
}
