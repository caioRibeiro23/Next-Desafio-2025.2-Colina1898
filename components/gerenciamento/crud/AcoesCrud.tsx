"use client";

import FormularioCriar from "@/components/formulario/Crud/formularioCriar";
import FormularioEditar from "@/components/formulario/Crud/formularioEditar";
import FormularioVizualizar from "@/components/formulario/Crud/formularioVizualizar";
import TituloGerenciamento from "@/components/Texto/tituloGerenciamento";
import Image from "next/image";

export default function AcoesCrud({ editar = false, visualizar = false, criar = false }: { editar?: boolean; visualizar?: boolean; criar?: boolean }) {
    return (
        <div className="flex flex-col items-center justify-center py-10 px-7.5 w-full gap-2.5 bg-black">
            <div className="w-full flex items-center justify-between py-2.5 px-10">
                <TituloGerenciamento texto={editar ? "Editar Produto" : visualizar ? "Visualizar Produto" : "Criar Produto"} />
                <button onClick={() => window.history.back()} className=" cursor-pointer transition-colors duration-300">
                    <i className="bi bi-arrow-left text-dourado hover:text-dourado/80 text-2xl bp-540:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl"></i>
                </button>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-5 py-5 px-7.5">
                {editar && (
                    <FormularioEditar imagem="/fundo/fundoTorcida.jpg" imagem2="/fundo/fundoTorcida.jpg" imagem3="/fundo/fundoTorcida.jpg" imagem4="/fundo/fundoTorcida.jpg" imagem5="/fundo/fundoTorcida.jpg"/>
           )}
                {visualizar && (
                    <FormularioVizualizar imagem="/fundo/fundoTorcida.jpg" imagem2="/fundo/fundoTorcida.jpg" imagem3="/fundo/fundoTorcida.jpg" imagem4="/fundo/fundoTorcida.jpg" imagem5="/fundo/fundoTorcida.jpg"/>
                )}
                {criar && (
                    <FormularioCriar />
                )}
            </div>
        </div>
    );
}