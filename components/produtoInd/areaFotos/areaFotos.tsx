import ImagemMenor from "./imagemMenor";
import ZoomImage from "./zoomImage";
export default function AreaFotos(){
    return (
        <div className="flex flex-col items-center justify-center gap-5 p-2.5 w-full">
            <div className="flex items-center justify-center w-full">
                <ZoomImage imagem="/produtos/camisa-I.png" alt="Camisa do Vasco da Gama" />
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