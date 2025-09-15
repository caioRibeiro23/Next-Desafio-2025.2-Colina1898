"use client";

import { useState } from "react";
import Botao from "../../botaoPadrao/botao";
import CampoFormCrud from "./campoFormCrud";
import Image from "next/image";

export default function FormularioVizualizar({imagem, imagem2, imagem3, imagem4, imagem5}: {imagem: string, imagem2: string, imagem3: string, imagem4: string, imagem5: string}) {
    const imagensSecundarias = [imagem2, imagem3, imagem4, imagem5];
    


    return (
        <div className="flex flex-col items-start justify-center gap-5 py-2.5 w-full">
            <div className="flex flex-col gap-7.5 p-2.5 w-full">
                <CampoFormCrud campo="Nome" type="text" id="name" name="name" defaultValue="Camisa Masculina Home Player 2025" visualizar={true} />

                <CampoFormCrud campo="Preço" type="text" id="price" name="price" defaultValue="399,90" visualizar={true} />

                <CampoFormCrud campo="Resumo" type="text" id="summary" name="summary" defaultValue="Com design inovador e tecnologia de ponta, esta é a mesma camisa utilizada pelos jogadores em campo." visualizar={true} />

                <CampoFormCrud campo="Descrição" type="textarea" id="description" name="description" defaultValue="Sinta a emoção do seu time do coração com a Camisa Masculina Home Player 2025. Com design inovador e tecnologia de ponta, esta é a mesma camisa utilizada pelos jogadores em campo. Vista a paixão do seu time e celebre suas conquistas. Feita com materiais de alta qualidade para garantir conforto e desempenho, é a escolha ideal para torcer ou para o dia a dia" visualizar={true} />
            </div>
            {/* area de imagens */}
            <div className="fle items-center justify-between w-full h-full md:px-10">
                <div className="flex flex-col md:flex-row gap-15 p-2.5">
                    <div className="flex flex-col items-center justify-center font-cormorant-sc">
                        <span className="text-dourado font-bold text-base bp-540:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-center">Foto Principal:</span>
                            <Image
                                src={imagem}
                                alt="Preview"
                                width={900}
                                height={900}
                                className="w-35 sm:w-50 bp-540:w-60 md:w-40 bp-840:w-40 lg:w-50 object-cover rounded-2xl border-dourado border-4 aspect-square"
                                
                            />
                    </div>
                    <div className="flex flex-col items-center justify-center font-cormorant-sc">
                        <span className="text-dourado font-bold text-base bp-540:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-center">Fotos Secundárias:</span>
                        <div className="flex flex-col md:flex-row gap-2.5 p-2.5">
                            {imagensSecundarias.map((img, index) => (
                                <div className="flex flex-col items-center" key={index}>
                                    <Image
                                        src={img}
                                        alt={`Imagem Secundária ${index + 1}`}
                                        width={300}
                                        height={300}
                                        className="w-30 sm:w-40 bp-540:w-40 md:w-30 bp-840:w-30 lg:w-37 object-cover rounded-2xl border-dourado border-4 aspect-square"
                                    />
                                </div>
                            ))}
                            
                        </div>


                    </div>
                </div>
                <div className="flex justify-center md:justify-end items-center">
                    <Botao texto="Fechar" />
                </div>
            </div>
        </div>
    );
}
