"use client";

import { useCart } from "@/src/context/cartContext";
import Botao from "../botaoPadrao/botao";
import { ProdutoType } from "@/types/data";

export default function ClientAction( {produto}: {produto: ProdutoType | null} ) {
    const {addToCart} = useCart();
    
      const handleAddToCart = () => {
        if (produto) {
          addToCart(produto);
        }
      }
    return  (
        <div className="flex flex-col items-center justify-center gap-5 w-full">
            <Botao texto={<div className="flex gap-2.5"><i className="bi bi-cart-plus"></i><p>Adicionar ao Carrinho</p></div>} onClick={handleAddToCart} />
            <Botao texto="Comprar Agora" />
        </div>
    );
}