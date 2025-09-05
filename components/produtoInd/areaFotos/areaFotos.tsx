import Image from "next/image";
import ImagemMenor from "./imagemMenor";
export default function AreaFotos(){
    return (
        <div className="flex flex-col items-center justify-center gap-5 p-2.5 w-full">
            <div className="flex items-center justify-center w-full">
                <Image
                    src="/produtos/camisa-I.png"
                    alt="Camisa do Vasco da Gama"
                    width={900}
                    height={900}
                    className="w-45 sm:w-50 bp-540:w-55 md:w-60 bp-840:w-70 lg:w-90 object-cover rounded-2xl border-dourado border-4"
                    />
            </div>
            <div className="flex items-center justify-center gap-2.5 w-full">
                <ImagemMenor src="/produtos/camisa-I.png" alt="Camisa do Vasco da Gama" />
                <ImagemMenor src="/produtos/camisa-I.png" alt="Camisa do Vasco da Gama" />
                <ImagemMenor src="/produtos/camisa-I.png" alt="Camisa do Vasco da Gama" />
                <ImagemMenor src="/produtos/camisa-I.png" alt="Camisa do Vasco da Gama" />
            </div>
        </div>
    );
}