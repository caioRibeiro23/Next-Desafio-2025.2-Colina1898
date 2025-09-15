import Botao from "../botaoPadrao/botao";
import CampoFormLogin from "./campoFormLogin";

export default function FormularioLogin(){
    return (
        <form className="flex flex-col items-center justify-center gap-5 py-2.5 px-7.5 w-full">
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
