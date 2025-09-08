"use client";

import { useState } from "react";

import TextoCardProduto from "../Texto/textoCardProduto";
import ZoomImage from "./zoomImage";

export default function CardProduto({ imagem, nome, preco }: { imagem: string; nome: string; preco: number }) {
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
            <ZoomImage imagem={imagem} alt={nome} />
            <TextoCardProduto texto={nome} />
            <TextoCardProduto texto={`R$ ${precoTotal.toFixed(2)}`} />
            <div className="flex flex-col items-center justify-center p-2.5">
                <TextoCardProduto texto="Qtd" />
                <div className="flex items-center justify-center gap-1.25">
                    <button onClick={diminuirQuantidade} className="text-white text-xl font-bold font-merriweather">-</button>
                    <span className="text-white text-sm bp-540:text-base bp-840:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium font-merriweather px-2.5 py-1.25 border border-dourado rounded-lg">{quantidade}</span>
                    <button onClick={aumentarQuantidade} className="text-white text-xl font-bold font-merriweather">+</button>
                </div>
                <button className="flex items-center justify-center gap-1.25 border-b border-dourado cursor-pointer">
                    <i className="bi bi-trash-fill text-dourado text-xl font-medium font-merriweather"></i>
                    <span className="text-dourado text-sm bp-540:text-sm lg:text-base xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium font-cormorant-sc">Remover</span>
                </button>
            </div>
        </div>
    );
}