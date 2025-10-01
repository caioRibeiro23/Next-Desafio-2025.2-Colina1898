"use client";

import Botao from "@/components/botaoPadrao/botao";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/src/context/cartContext";
import CardProdFinalizado from "@/components/produto/cardProdFinalizado";
import LinhaResumo from "@/components/FinalizarPedido/linhaResumo";

export default function PedidoFinalizadoPage() {
    const [detalhesOpen, setDetalhesOpen] = useState(false);
    const toggleDetalhes = () => {
        setDetalhesOpen(!detalhesOpen);
    };
    const {cart, desconto, frete, clearCart} = useCart();
    const totalPedido = cart.reduce((total, item) => total + (item.price ?? 0) * item.quantity, 0);

    const valorTotal = desconto ? totalPedido - desconto + (frete ? frete : 0) : totalPedido + (frete ? frete : 0);
    return (
        <div className="flex flex-col items-center justify-start w-full bg-[url('/fundo/fundoTorcida.jpg')] bg-cover bg-center bg-black/95 bg-blend-darken text-dourado px-5 md:px-20 lg:px-40 py-10 text-center font-cormorant-sc gap-5 min-h-screen">
            <h1 className="font-cormorant-sc text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold">Compra Realizada com Sucesso!</h1>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl mb-5">Obrigado por comprar conosco. Seu pedido foi processado com sucesso.</p>
            <div className={`${detalhesOpen ? 'hidden' : 'block'}`}>
            <Botao texto="Ver Detalhes do Pedido" onClick={toggleDetalhes} />
            </div>
            {detalhesOpen && (
                <>
                <h2 className="font-cormorant-sc text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold w-full text-start px-5">itens do pedido:</h2>
                {cart.map((item) => (
                    <CardProdFinalizado key={`${item.id}-${item.title}`} item={item} />
                ))}
                <h2 className="font-cormorant-sc text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold w-full text-start px-5">Total do Pedido:</h2>
                <div className="flex flex-col items-start justify-start w-full px-5">
                    <LinhaResumo título="Subtotal" valor={totalPedido} />
                    <LinhaResumo título="desconto" valor={desconto || 0} />
                    <LinhaResumo título="frete" valor={frete || 0} />
                    <hr className="w-full border-t border-dourado my-2.5" />
                    <LinhaResumo título="Total" valor={valorTotal} />
                </div>
                </>
            )}
            <Link href="/" className="mb-5">
                <Botao texto="Voltar para a Página Inicial" onClick={clearCart} />
            </Link>
        </div>
    );
}