"use client"

import Botao from "../botaoPadrao/botao";
import CampoForm from "./campoForm";
import { useForm } from "react-hook-form";
import { formSchema, FormData } from "@/src/schema/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {useState} from "react";

export default function Formulario(){
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", subject: "", message: "" }
    });

    const onSubmit = async(data: FormData) => {
        const response = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            setIsSubmitSuccessful(true);
            reset();
        }
        else {
            setError("Erro ao enviar o formulário. Por favor, tente novamente.");
        }
    }
    return (
        <div className="flex flex-col w-full items-center justify-center font-cormorant-sc text-white">
        {isSubmitSuccessful && <span className="text-dourado">Formulário enviado com sucesso!</span>}
        {error && <span className="text-vermelho">{error}</span>}
        <form className="flex flex-col items-start justify-center gap-5 py-2.5 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-7.5 p-2.5 w-full">
                <CampoForm campo="Nome" type="text" id="name" name="name" register={register} errors={errors} />

                <CampoForm campo="Email" type="email" id="email" name="email" register={register} errors={errors} />

                <CampoForm campo="Assunto" type="text" id="subject" name="subject" register={register} errors={errors} />

                <CampoForm campo="Mensagem" type="textarea" id="message" name="message" register={register} errors={errors} />
            </div>
            <div className="flex justify-center w-full">
                <Botao texto="Enviar" />
            </div>
        </form>
        </div>
    );
}
