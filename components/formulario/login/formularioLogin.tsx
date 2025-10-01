"use client";

import Botao from "../../botaoPadrao/botao";
import CampoFormLogin from "./campoFormLogin";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormularioLogin({ registro = false }: { registro?: boolean }) {
    const router = useRouter();
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState<string | null>(null);
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        if(registro && senha !== confirmarSenha) {
            setError("As senhas não coincidem.");
        }
        else{
            setError(null);
            if(registro) {
            router.push('/login');
            }
            else{
                router.push('/gerenciamento');
            }
        }
    }

    return (
        <form className="flex flex-col items-center justify-center gap-5 py-2.5 px-7.5 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 p-2.5 w-full items-center justify-center">
                <CampoFormLogin campo="Nome" type="text" id="name" name="name" />

                <CampoFormLogin campo="Email" type="email" id="email" name="email" />

                <CampoFormLogin campo="Senha" type="password" id="senha" name="senha" onChange={(e) => setSenha(e.target.value)} />
                {registro && <CampoFormLogin campo="Confirmar Senha" type="password" id="confirmarSenha" name="confirmarSenha" onChange={(e) => setConfirmarSenha(e.target.value)} />}
            </div>
            { error && <span className="text-red-500 font-cormorant-sc text-sm bp-540:text-base md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl">{error}</span> }
            <div className="flex justify-center w-full">
                <Botao texto={registro ? "Registrar" : "Login"} />
            </div>
        </form>
    );
}
