import Image from "next/image";


export default function Produto({ temDesc }: {temDesc: boolean}){
    return (
        <div className="flex flex-col items-center justify-center p-2.5 bg-pretoSuave rounded-2xl border border-dourado border-2 gap-2.5 w-45 sm:w-55 bp-540:w-70 md:w-55 bp-840:w-65 lg:w-75 xl:w-85 3xl:w-90 hover:scale-105 transition-all duration-200 cursor-pointer">
            <div className="w-full">
                <Image 
                src="/produtos/camisa-I.png" 
                alt="Camisa do Vasco da Gama" 
                width={360}
                height={360}
                className="w-full h-full object-cover rounded-2xl"/>
            </div>
            <div className="flex flex-col items-center justify-center gap-2.5 w-full p-2.5">
                <h1 className="text-white p-2.5 font-medium text-center font-cormorant-sc text-xl bp-540:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">Camisa Masculina Home Player 2025</h1>
                <p className="text-white text-center font-bold font-cormorant-sc text-xl bp-540:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">R$ 399,90</p>
                {temDesc && <p className="text-dourado text-lg text-center">Descrição do produto em destaque.</p>}
            </div>
        </div>
    );
}
