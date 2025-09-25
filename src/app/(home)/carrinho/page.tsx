"use client";

import CardProduto from "@/components/produto/cardProduto";
import Resumo from "@/components/Carrinho/Resumo/resumo";
import { useCart } from "@/src/context/cartContext";

export default function CarrinhoPage() {
    const {cart} = useCart();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + (item.price ?? 0) * item.quantity, 0);
  return (
        <div className="bg-black flex flex-col bp-840:flex-row items-start justify-center gap-10 py-12 lg:gap-10 px-5 w-full">
            <div className="flex flex-col items-start justify-start gap-2.5 p-2.5 w-full lg:px-5">
                <h1 className="text-dourado text-2xl bp-540:text-3xl bp-840:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-semibold font-cormorant-sc">Carrinho</h1>
                <div className="flex flex-col items-center justify-center gap-4 p-2.5 w-full">
                    {cart.map((item) => (
                        <CardProduto key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2.5 p-2.5 w-full bp-840:w-auto">
                <Resumo quantidade={totalItems} subTotal={totalPrice} />
                <button className="bg-dourado text-black flex justify-center items-center gap-2.5 text-lg bp-540:text-xl bp-840:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium font-cormorant-sc py-1.5 px-2.5 rounded-lg cursor-pointer border border-dourado hover:scale-102 transition duration-200 w-full text-center ">
                Finalizar Compra
                <i className="bi bi-arrow-right text-center text-sm bp-540:text-lg bp-840:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl"></i>
                </button>
            </div>
        </div>
    );
}