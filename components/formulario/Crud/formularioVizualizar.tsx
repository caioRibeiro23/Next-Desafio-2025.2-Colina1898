"use client";

import { useState } from "react";
import Botao from "../../botaoPadrao/botao";
import CampoFormCrud from "./campoFormCrud";
import Image from "next/image";
import { ProdutoType } from "@/types/data";
import Link from "next/link";

export default function FormularioVizualizar({ produto }: { produto: ProdutoType | null }) {
    const imagensSecundarias = produto?.secondaryImages ?? ["", "", ""];


    return (
        <div className="flex flex-col items-start justify-center gap-5 py-2.5 w-full">
            <div className="flex flex-col gap-7.5 p-2.5 w-full">
                <CampoFormCrud campo="Nome" type="text" id="name" name="name" defaultValue={produto?.title ?? ""} visualizar={true} />

                <CampoFormCrud campo="Preço" type="text" id="price" name="price" defaultValue={produto?.price?.toFixed(2) ?? ""} visualizar={true} />

                <CampoFormCrud campo="Resumo" type="text" id="summary" name="summary" defaultValue={produto?.summary ?? ""} visualizar={true} />

                <CampoFormCrud campo="Descrição" type="textarea" id="description" name="description" defaultValue={produto?.description ?? ""} visualizar={true} />

                <CampoFormCrud campo="Categoria" type="text" id="category" name="category" defaultValue={produto?.type ?? ""} visualizar={true} />
            </div>
            {/* area de imagens */}
            <div className="fle items-center justify-between w-full h-full md:px-10">
                <div className="flex flex-col md:flex-row gap-15 p-2.5">
                    <div className="flex flex-col items-center justify-center font-cormorant-sc">
                        <span className="text-dourado font-bold text-base bp-540:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-center">Foto Principal:</span>
                            <Image
                                src={produto?.principalImage || '/produtos/default.png'}
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
                                        src={imagensSecundarias[index] || '/produtos/default.png'}
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
                    <Link href="/gerenciamento">
                        <Botao texto="Fechar" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
