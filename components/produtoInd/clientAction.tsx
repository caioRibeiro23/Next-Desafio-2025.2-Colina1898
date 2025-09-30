"use client";

import { useCart } from "@/src/context/cartContext";
import Botao from "../botaoPadrao/botao";
import { ProdutoType } from "@/types/data";
import {useState} from "react";
import Selecao from "./selecao/selecao";

export default function ClientAction( {produto}: {produto: ProdutoType | null} ) {
    const {addToCart} = useCart();
    const [added, setAdded] = useState(false);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    
      const handleAddToCart = () => {
        if (!produto) {
          return;
        }
        const itemToAdd: ProdutoType = { ...produto };
        if (produto.type === "VESTUARIO" && tamanhoSelecionado) {
            itemToAdd.title = `${produto.title} (${tamanhoSelecionado})`;
        } else if (produto.type === "VESTUARIO" && !tamanhoSelecionado) {
            setError("Por favor, selecione um tamanho.");
            setTimeout(() => setError(null), 3000); 
            return;
        }
        addToCart(itemToAdd);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
      }
    return  (
      <>
        {produto?.type === "VESTUARIO" && <Selecao onTamanhoChanged={(tamanho) => setTamanhoSelecionado(tamanho)} />}
          {error && <p className="text-dourado text-sm bp-540:text-base md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium font-cormorant-sc">{error}</p>}
        <div className="flex flex-col items-center justify-center gap-5 w-full">
            {added ? <Botao texto={<div className="flex gap-2.5"><i className="bi bi-cart-check"></i><p>Produto adicionado ao carrinho!</p></div>} /> : <Botao texto={<div className="flex gap-2.5"><i className="bi bi-cart-plus"></i><p>Adicionar ao Carrinho</p></div>} onClick={handleAddToCart} />}
            <Botao texto="Comprar Agora" />
        </div>
      </>
    );
}