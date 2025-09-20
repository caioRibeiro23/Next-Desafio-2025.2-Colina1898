"use client";

import { useState } from "react";

import Image from "next/image";
import TextoCardProduto from "../../Texto/textoCardProduto";
import BotoesCrud from "./botoes/botoesCrud";

export default function LinhaProduto({ imagem, nome, preco}: { imagem: string; nome: string; preco: number }) {

    return (
        <div className=" bg-black/70 grid  grid-cols-[1fr_2.5fr_2fr_1fr]  bp-840:grid-cols-[1fr_1fr_2.5fr_1fr_2fr] items-center py-2.5 w-full border border-dourado rounded-4xl">
            <div className="px-4 py-2 text-center">
                <TextoCardProduto texto="001" /></div>
            <div className="px-4 hidden items-center justify-center bp-840:flex">
                <Image
                    src={imagem}
                    alt={nome}
                    width={900}
                    height={900}
                    className="w-25 sm:w-25 bp-540:w-25 md:w-25 bp-840:w-25 lg:w-24 object-cover rounded-2xl"
                />
            </div>
            <div className="px-4 py-2 flex items-center justify-center">
                <TextoCardProduto texto={nome} />
            </div>
            <div className="px-4 py-2 flex items-center justify-center">
                <TextoCardProduto texto={`R$ ${preco.toFixed(2)}`} />
            </div>
            <div className="px-4 py-2 flex items-center justify-center">
                <BotoesCrud />
            </div>
        </div>
    );
}