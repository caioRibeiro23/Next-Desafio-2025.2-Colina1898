"use client";

import TextoCardProduto from "../Texto/textoCardProduto";
import ZoomImage from "../Carrinho/zoomImage";
import { CartItem, useCart } from "@/src/context/cartContext";

export default function CardProduto({item}: { item: CartItem}) {
    const precoTotal = (item.price ?? 0) * item.quantity;
    const {addToCart, removeFromCart, decreaseQuantity} = useCart();
    const aumentarQuantidade = () => {
        addToCart(item);
    }
    const diminuirQuantidade = () => {
        if (item.id !== undefined) {
            decreaseQuantity(item.id);
        }
    }

    const removerItem = () => {
        if (item.id !== undefined) {
            removeFromCart(item.id);
        }
    }

    return (
        <div className= " grid  grid-cols-[1fr_2.5fr_2fr_1fr]  bp-840:grid-cols-[1fr_2.5fr_1fr_1fr] items-center justify-center py-2.5 w-full border border-dourado rounded-4xl p-2">
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
                    <button onClick={diminuirQuantidade} className="text-white text-sm bp-540:text-base bp-840:text-base lg:text-xl font-bold font-merriweather">-</button>
                    <span className="text-white text-xs bp-540:text-sm bp-840:text-sm lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium font-merriweather px-1.25 py-1 border border-dourado rounded-lg">{item.quantity}</span>
                    <button onClick={aumentarQuantidade} className="text-white text-sm bp-540:text-base bp-840:text-lg lg:text-xl font-bold font-merriweather">+</button>
                </div>
                <button className="flex items-center justify-center gap-1.25 border-b border-dourado cursor-pointer" onClick={removerItem}>
                    <i className="bi bi-trash-fill text-dourado  text-sm bp-540:text-base bp-840:text-sm lg:text-lg font-medium font-merriweather hidden bp-540:block"></i>
                    <span className="text-dourado text-xs bp-540:text-sm lg:text-base xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium font-cormorant-sc">Remover</span>
                </button>
            </div> 
        </div>
    );
}