"use client"

import { useState } from "react";
import BotaoSelecao from "./botaoSelecao";

export default function Selecao(){
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState("");

    const handleTamanhoSelecionado = (tamanho: string) => {
        setTamanhoSelecionado(tamanho);
    };
    const tamanhos = ["PP", "P", "M", "G", "GG"];
    return (
    <div>
        <div className="flex flex-col items-center justify-center gap-2.5 p-2.5 w-full">
            <h1 className="text-white text-center text-lg bp-540:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-cormorant-sc font-semibold ">Escolha o Tamanho:</h1>
            <div className="flex gap-2.5 p-2.5">
                {tamanhos.map((tamanho) => (
                    <BotaoSelecao key={tamanho} texto={tamanho} ativo={tamanhoSelecionado === tamanho} onClick={() => handleTamanhoSelecionado(tamanho)} />
                ))}
            </div>

        </div>
    </div>
    );
}