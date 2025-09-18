"use client";

import { useState } from "react";

import Image from "next/image";
import TextoCardProduto from "../../Texto/textoCardProduto";
import BotoesCrud from "../botoesCrud";

export default function LinhaProduto({ imagem, nome, preco}: { imagem: string; nome: string; preco: number }) {

    return (
        <tr className="bg-black/70 flex items-center justify-between px-4 py-2.5 w-full border border-dourado rounded-4xl">
            <td>
                <TextoCardProduto texto="001" /></td>
            <td>
                <Image
                    src={imagem}
                    alt={nome}
                    width={900}
                    height={900}
                    className="w-25 sm:w-25 bp-540:w-25 md:w-25 bp-840:w-25 lg:w-24 object-cover rounded-2xl"
                />
            </td>
            <td>
                <TextoCardProduto texto={nome} />
            </td>
            <td>
                <TextoCardProduto texto={`R$ ${preco.toFixed(2)}`} />
            </td>
            <td>
                <BotoesCrud />
            </td>
        </tr>
    );
}