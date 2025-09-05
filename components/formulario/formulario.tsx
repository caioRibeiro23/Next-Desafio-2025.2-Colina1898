import Botao from "../botaoPadrao/botao";
import CampoForm from "./campoForm";

export default function Formulario(){
    return (
        <form className="flex flex-col items-start justify-center gap-5 py-2.5 w-full">
            <div className="flex flex-col gap-7.5 p-2.5 w-full">
                <CampoForm campo="Nome" type="text" id="name" name="name" />

                <CampoForm campo="Email" type="email" id="email" name="email" />

                <CampoForm campo="Assunto" type="text" id="subject" name="subject" />

                <CampoForm campo="Mensagem" type="textarea" id="message" name="message" />
            </div>
            <div className="flex justify-center w-full">
                <Botao texto="Enviar" />
            </div>
        </form>
    );
}
