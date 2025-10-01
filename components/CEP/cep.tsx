"use client";
import { useState } from "react";

export default function CEP({ calcularFrete, subtotal }: { calcularFrete: (valor: number | null) => void, subtotal: number }) {
    const [cep, setCep] = useState("");
    const [error, setError] = useState<string | null>(null);
    const atualizaFrete = () => {
        let frete: number | null = 29.90;
        if(!cep || cep.length !== 8 || subtotal === 0) {
            if(subtotal === 0) {
                alert("Adicione produtos ao carrinho para calcular o frete.");
            }
            else{
                setError("CEP inválido.");
            }
            frete = null;
            calcularFrete(frete);
            return;
        }
        calcularFrete(frete);
        setCep("");
        return;
    }
    return (
        <div className="flex flex-col items-start justify-start gap-2.5 w-full p-2.5">
            <h2 className="text-dourado text-lg bp-540:text-xl bp-840:text-2xl lg:text-xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold font-cormorant-sc">Calcular Frete</h2>
            <div className="flex flex-col bp-540:flex-row items-center justify-start gap-2.5 w-full">
                <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} placeholder="Insira seu CEP" className="bg-pretoSuave text-white text-sm bp-540:text-sm bp-840:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium font-cormorant-sc py-1.5 px-2.5 rounded-lg focus:outline-none border border-dourado w-full bp-540:w-60 bp-840:w-72 xl:w-80 2xl:w-96" />
                <button className="bg-dourado text-pretoSuave text-sm bp-540:text-sm bp-840:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium font-cormorant-sc py-1.5 px-2.5 rounded-lg cursor-pointer border border-dourado hover:scale-105 transition duration-200" onClick={atualizaFrete}>OK</button>
            </div>
            { error && <span className="text-red-500 text-sm bp-540:text-sm bp-840:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl">{error}</span> }
        </div>
    );
}