"use client";

import { useCart } from "@/src/context/cartContext";
import Botao from "../botaoPadrao/botao";
import { ProdutoType } from "@/types/data";
import {useState} from "react";

export default function ClientAction( {produto}: {produto: ProdutoType | null} ) {
    const {addToCart} = useCart();
    const [added, setAdded] = useState(false);
    
      const handleAddToCart = () => {
        if (produto) {
            addToCart(produto);
            setAdded(true);
            setTimeout(() => setAdded(false), 2000);
        }
      }
    return  (
        <div className="flex flex-col items-center justify-center gap-5 w-full">
            {added ? <Botao texto={<div className="flex gap-2.5"><i className="bi bi-cart-check"></i><p>Produto adicionado ao carrinho!</p></div>} /> : <Botao texto={<div className="flex gap-2.5"><i className="bi bi-cart-plus"></i><p>Adicionar ao Carrinho</p></div>} onClick={handleAddToCart} />}
            <Botao texto="Comprar Agora" />
        </div>
    );
}