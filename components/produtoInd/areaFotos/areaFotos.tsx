"use client";

import ImagemMenor from "./imagemMenor";
import ZoomImage from "./zoomImage";
import { useState } from "react";

type AreaFotosProps = {
    imagemPrincipal: string;
    imagensSecundarias: string[];
}

export default function AreaFotos({ imagemPrincipal, imagensSecundarias }: AreaFotosProps){
    const [imagemAtual, setImagemAtual] = useState(imagemPrincipal);

    const mudarImagem = (src: string) => {
        setImagemAtual(src);
    }

    const imagens = [
        imagemPrincipal,
        ...imagensSecundarias,
    ];

    return (
        <div className="flex flex-col items-center justify-center gap-5 p-2.5 w-full">
            <div className="flex items-center justify-center w-full">
                <ZoomImage imagem={imagemAtual} alt="Camisa do Vasco da Gama" />
            </div>
            <div className="flex items-center justify-center gap-2.5 w-full">
                {imagens.map((src, index) => (
                    <ImagemMenor key={index} src={src} alt={`Camisa do Vasco da Gama ${index + 1}`} onClick={() => mudarImagem(src)} />
                ))}
            </div>
        </div>
    );
}