"use client";

import { useState } from "react";

import Image from "next/image";
import TextoCardProduto from "../Texto/textoCardProduto";
import ZoomImage from "../Carrinho/zoomImage";
import BotoesCrud from "../gerenciamento/tabela/botoes/botoesCrud";
import { CartItem, useCart } from "@/src/context/cartContext";
import { ProdutoType } from "@/types/data";

export default function CardProdFinalizado({item}: { item: CartItem}) {
    const precoTotal = (item.price ?? 0) * item.quantity;


    return (
        <div className= " grid  grid-cols-[1fr_2.5fr_2fr_1fr]  bp-840:grid-cols-[1fr_2.5fr_1fr_1fr] items-center justify-center py-2.5 w-full border border-dourado rounded-4xl p-2 bg-black">
            <div className="flex items-center justify-center">
            <ZoomImage imagem={item.principalImage ?? ""} alt={item.title ?? ""} />
            </div>
            <div className="px-4 py-2 flex items-center justify-center"> 
            <TextoCardProduto texto={item.title ?? ""} />
            </div>
            <div className="px-4 py-2 flex items-center justify-center">
            <TextoCardProduto texto={`R$ ${precoTotal.toFixed(2)}`} />
            </div>
            <div className="flex flex-col items-center justify-center p-2.5">
                <TextoCardProduto texto="Qtd" />
                <div className="flex items-center justify-center gap-1.25">
                    <span className="text-white text-xs bp-540:text-sm bp-840:text-sm lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium font-merriweather px-1.25 py-1">{item.quantity}</span>
                </div>
            </div>
        </div>
    );
}