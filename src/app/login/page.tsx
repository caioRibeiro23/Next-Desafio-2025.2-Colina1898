"use client";

import FormularioLogin from "@/components/formulario/login/formularioLogin";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className = "grid grid-cols-1 md:grid-cols-2 h-screen w-full">
            <div className="bg-[url('/fundo/fundoTorcida.jpg')] bg-cover bg-center  bg-black/97 bg-blend-darken flex flex-col items-center justify-start md:justify-center gap-2.5 px-2.5 py-10 md:py-2.5 w-full h-full border-r border-dourado">
                <div className="flex items-center justify-between   w-full px-10">
                    <button onClick={() => window.history.back()} className=" cursor-pointer transition-colors duration-300">
                        <i className="bi bi-arrow-left text-dourado hover:text-dourado/60 text-lg bp-540:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl cursor-pointer "></i>
                    </button>
                    <h1 className="font-cormorant-sc text-dourado text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-center">Olá Gigante!</h1>
                    <i className="bi bi-arrow-left text-lg bp-540:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl text-transparent"></i>
                </div>
                <h2 className="font-cormorant-sc text-dourado text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold mb-5 text-center px-7.5">Entre e celebre a nossa história. A colina espera por você.</h2>

                <FormularioLogin />
                <div className="flex justify-center w-full gap-1.5">
                    <span className="text-xs bp-540:text-sm md:text-base text-dourado font-cormorant-sc font-medium">Nao possui uma conta?</span>
                        <Link href="/registro" className="text-dourado hover:text-dourado/60 text-xs bp-540:text-sm md:text-base font-medium font-cormorant-sc">Registre-se</Link>
                </div>
            </div>
            <div className="hidden md:flex bg-[url('/fundo/fundoLogin.jpg')] bg-cover bg-center bg-black/55 bg-blend-darken w-full h-full"></div>
        </div>
    );
}