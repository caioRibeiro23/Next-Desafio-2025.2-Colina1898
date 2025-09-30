"use client";

import { useState } from "react";
import Botao from "../../botaoPadrao/botao";
import CampoFormCrud from "./campoFormCrud";
import Image from "next/image";
import CriarProduto from "@/src/app/gerenciamento/acoes/criar/page";
import { createProduto } from "@/actions/gerenciamento/actions";

export default function FormularioCriar() {
    const imagensSecundarias = ["", "", ""];
    const [previewImage, setPreviewImage] = useState("/previewImagem/selectImage.png");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
        setPreviewImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const [previewSecundarias, setPreviewSecundarias] = useState(["/previewImagem/selectImage.png", "/previewImagem/selectImage.png", "/previewImagem/selectImage.png", "/previewImagem/selectImage.png"]);
    const handleChangeSecundaria = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (e.target.files && e.target.files[0]) {
            const newImg = URL.createObjectURL(e.target.files[0]);
            const updated = [...previewSecundarias];
            updated[index] = newImg;
            setPreviewSecundarias(updated);
        }
    };

    return (
        <form className="flex flex-col items-start justify-center gap-5 py-2.5 w-full" action={createProduto}>
            <div className="flex flex-col gap-7.5 p-2.5 w-full">
                <CampoFormCrud campo="Nome" type="text" id="name" name="name" defaultValue="" />

                <CampoFormCrud campo="Preço" type="text" id="price" name="price" defaultValue="" />

                <CampoFormCrud campo="Resumo" type="text" id="summary" name="summary" defaultValue="" />

                <CampoFormCrud campo="Descrição" type="textarea" id="description" name="description" defaultValue="" />

                <CampoFormCrud campo="Categoria" type="text" id="category" name="category" defaultValue="" />
            </div>
            {/* area de imagens */}
            <div className="flex flex-col items-start justify-between w-full h-full md:px-10">
                <div className="flex flex-col md:flex-row gap-15 p-2.5">
                    <div className="flex flex-col items-center justify-center font-cormorant-sc">
                        <span className="text-dourado font-bold text-start text-base bp-540:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">Foto Principal:</span>
                        <label htmlFor="image" className="cursor-pointer">
                        {previewImage && (
                            <Image
                                src={previewImage}
                                alt="Preview"
                                width={900}
                                height={900}
                                className="w-35 sm:w-50 bp-540:w-60 md:w-40 bp-840:w-40 lg:w-50 object-cover rounded-2xl border-dourado border-4 aspect-square"
                            />
                        )}
                        </label>
                        <input type="file" id="image" name="principalImage" accept="image/*" onChange={handleChange} className="hidden"/>
                    </div>
                    <div className="flex flex-col items-center justify-center font-cormorant-sc">
                        <span className="text-dourado font-bold text-start text-base bp-540:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">Fotos Secundárias:</span>
                        <div className="flex flex-col md:flex-row gap-2.5 p-2.5">
                            {imagensSecundarias.map((img, index) => (
                                <div className="flex flex-col items-center" key={index}>
                                    <label htmlFor={`image-${index}`} className="cursor-pointer">
                                    <Image
                                        src={previewSecundarias[index] }
                                        alt={`Imagem Secundária ${index + 1}`}
                                        width={300}
                                        height={300}
                                        className="w-30 sm:w-40 bp-540:w-40 md:w-30 bp-840:w-30 lg:w-37 object-cover rounded-2xl border-dourado border-4 aspect-square"
                                    />
                                    </label>
                                     <input type="file" id={`image-${index}`} name={`image-${index}`} accept="image/*" onChange={(e) => handleChangeSecundaria(e, index)} className="hidden"></input>
                                </div>
                            ))}
                            
                        </div>


                    </div>
                </div>
                <div className="flex justify-center md:justify-end items-center w-full">
                    <Botao texto="Enviar" />
                </div>
            </div>
        </form>
    );
}
