"use client";
import {useState,} from "react";

export default function AddCupom({calculaDesconto, subTotal}: {calculaDesconto: (valor: number|null) => void, subTotal: number}) {
    const [cupom, setCupom] = useState("");
    const adicionarCupom = () => {
        let valorDesconto:number|null = 10;
        if ((!cupom) || (cupom !== "COLINA10" && cupom !== "GIGANTEDACOLINA")|| subTotal < 30) {
            if(subTotal < 30) {
                alert("O valor mínimo para usar cupom é R$30,00");
            }
            else{
                alert("Cupom inválido");
            }
            valorDesconto = null;
            calculaDesconto(valorDesconto);
            return
        }
        calculaDesconto(valorDesconto);
        setCupom("");
        return;
    }
    return (
        <div className="flex flex-col bp-540:flex-row items-start bp-540:items-center justify-start gap-5 w-full p-2.5">
            <h3 className="text-white text-sm bp-540:text-sm bp-840:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium font-cormorant-sc">Cupom:</h3>
            <input type="text" value={cupom} onChange={(e) => setCupom(e.target.value)} placeholder="Insira seu cupom" className="bg-pretoSuave text-white text-sm bp-540:text-sm bp-840:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl  font-medium font-cormorant-sc py-1.5 px-2.5 rounded-lg focus:outline-none border border-dourado w-full" />
            <button className="text-white text-sm bp-540:text-sm bp-840:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium font-cormorant-sc cursor-pointer border-b border-white hover:scale-105 transition-all duration-200" onClick={adicionarCupom}>+Adicionar</button>
        </div>
    );
}