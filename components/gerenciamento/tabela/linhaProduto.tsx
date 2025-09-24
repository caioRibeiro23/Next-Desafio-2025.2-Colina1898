"use client";

import { useState } from "react";

import Image from "next/image";
import TextoCardProduto from "../../Texto/textoCardProduto";
import BotoesCrud from "./botoes/botoesCrud";
import { ProdutoType } from "@/types/data";

export default function LinhaProduto({ produto }: { produto: ProdutoType }) {

    return (
        <div className=" bg-black/70 grid  grid-cols-[1fr_2.5fr_2fr_1.5fr]  bp-840:grid-cols-[1fr_1fr_2.5fr_1fr_2fr] items-center py-2.5 w-full border border-dourado rounded-4xl">
            <div className="px-4 py-2 text-center">
                <TextoCardProduto texto={produto.id?.toString() ?? ""} /></div>
            <div className="px-4 hidden items-center justify-center bp-840:flex">
                <Image
                    src={produto.principalImage || "/produtos/default.png"}
                    alt={produto.title ?? "Produto sem título"}
                    width={900}
                    height={900}
                    className="w-25 sm:w-25 bp-540:w-25 md:w-25 bp-840:w-25 lg:w-24 object-cover rounded-2xl"
                />
            </div>
            <div className="px-4 py-2 flex items-center justify-center">
                <TextoCardProduto texto={produto.title ?? ""} />
            </div>
            <div className="px-4 py-2 flex items-center justify-center">
                <TextoCardProduto texto={`R$ ${produto.price?.toFixed(2) ?? "0.00"}`} />
            </div>
            <div className="px-4 py-2 flex items-center justify-center">
                <BotoesCrud produto={produto} />
            </div>
        </div>
    );
}