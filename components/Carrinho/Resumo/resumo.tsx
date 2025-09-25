"use client";
import { useState } from "react";

import TextoResumo from "./textoResumo";
import AddCupom from "./addCupom";
import CEP from "@/components/CEP/cep";

export default function Resumo({ quantidade, subTotal }: { quantidade: number, subTotal: number }) {
    const [frete, setFrete] = useState<number|null>(null);
    const [desconto, setDesconto] = useState<number|null>(0);  
    const precoFinal = subTotal + (frete ? frete : 0) - (desconto ? desconto : 0);
    return (
        <div className="bg-cinzaEscuro flex flex-col items-start justify-center gap-2.5 px-4 py-2.5 w-full bp-840:w-80 lg:w-125 border border-dourado rounded-2xl">
            <h1 className="text-dourado text-lg bp-540:text-xl bp-840:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold font-cormorant-sc p-2.5">Resumo do Carrinho</h1>
            <div className="flex flex-col items-center justify-center w-full p-2.5 border-b border-dourado">
                <TextoResumo titulo={`Itens (${quantidade})`} valor={`R$ ${subTotal.toFixed(2)}`} />
                <TextoResumo titulo="Desconto" valor={desconto ? `R$ ${desconto.toFixed(2)}` : "-"} />
                <AddCupom calculaDesconto={setDesconto} />
                <TextoResumo titulo="Frete" valor={frete ? `R$ ${frete.toFixed(2)}` : "-"} />
                <CEP calcularFrete={setFrete} />
            </div>
            <TextoResumo titulo="Total" valor={`R$ ${precoFinal.toFixed(2)}`} />
        </div>
    );
}