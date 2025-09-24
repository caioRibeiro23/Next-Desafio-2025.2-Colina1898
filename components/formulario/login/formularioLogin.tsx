"use client";

import Link from "next/link";
import Botao from "../../botaoPadrao/botao";
import CampoFormLogin from "./campoFormLogin";
import { useRouter } from "next/navigation";

export default function FormularioLogin(){
    const router = useRouter();
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        router.push('/gerenciamento');
    }
    return (
        <form className="flex flex-col items-center justify-center gap-5 py-2.5 px-7.5 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-7.5 p-2.5 w-full items-center justify-center">
                <CampoFormLogin campo="Nome" type="text" id="name" name="name" />

                <CampoFormLogin campo="Email" type="email" id="email" name="email" />

                <CampoFormLogin campo="Senha" type="password" id="senha" name="senha" />
            </div>
            <div className="flex justify-center w-full">
                    <Botao texto="Login" />
            </div>
        </form>
    );
}
