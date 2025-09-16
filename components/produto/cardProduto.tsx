"use client";

import { useState } from "react";

import Image from "next/image";
import TextoCardProduto from "../Texto/textoCardProduto";
import ZoomImage from "../Carrinho/zoomImage";
import BotoesCrud from "../gerenciamento/botoesCrud";

export default function CardProduto({ imagem, nome, preco, gerenciamento = false }: { imagem: string; nome: string; preco: number; gerenciamento?: boolean }) {
    const [quantidade, setQuantidade] = useState(1);
    const aumentarQuantidade = () => {
        setQuantidade(quantidade + 1);
    }
    const diminuirQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    }
    const precoTotal = preco * quantidade;

    return (
        <div className="flex items-center justify-between px-4 py-2.5 w-full border border-dourado rounded-4xl">
        {gerenciamento && (
            <TextoCardProduto texto="001" />
        )}
        {gerenciamento ? (
            <Image
                    src={imagem}
                    alt={nome}
                    width={900}
                    height={900}
                    className="w-25 sm:w-25 bp-540:w-25 md:w-25 bp-840:w-25 lg:w-30 object-cover rounded-2xl"
                    />
        ) : (
            <ZoomImage imagem={imagem} alt={nome} />
        )}
            <div className="flex flex-col bp-540:flex-row items-center justify-center gap-2.5 bp-540:gap-0">
                <TextoCardProduto texto={nome} />
                <TextoCardProduto texto={`R$ ${precoTotal.toFixed(2)}`} />
            </div>
            {gerenciamento ? (
                <BotoesCrud />
            ) : (
                <div className="flex flex-col items-center justify-center p-2.5">
                    <TextoCardProduto texto="Qtd" />
                    <div className="flex items-center justify-center gap-1.25">
                        <button onClick={diminuirQuantidade} className="text-white text-sm bp-540:text-base bp-840:text-lg lg:text-xl font-bold font-merriweather">-</button>
                        <span className="text-white text-xs bp-540:text-sm bp-840:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium font-merriweather px-1.25 py-1 border border-dourado rounded-lg">{quantidade}</span>
                        <button onClick={aumentarQuantidade} className="text-white text-sm bp-540:text-base bp-840:text-lg lg:text-xl font-bold font-merriweather">+</button>
                    </div>
                    <button className="flex items-center justify-center gap-1.25 border-b border-dourado cursor-pointer">
                        <i className="bi bi-trash-fill text-dourado  text-sm bp-540:text-base bp-840:text-lg lg:text-xl font-medium font-merriweather hidden bp-540:block"></i>
                        <span className="text-dourado text-xs bp-540:text-sm lg:text-base xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium font-cormorant-sc">Remover</span>
                    </button>
                </div>
            )}
        </div>
    );
}