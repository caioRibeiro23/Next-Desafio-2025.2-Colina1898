import Botao from "@/components/botaoPadrao/botao";
import Link from "next/link";

export default function CreateButton() {
    return (
        <Link href="/gerenciamento/acoes/criar">
            <Botao texto={<div className="flex gap-2.5"><i className="bi bi-plus-square-fill"></i><p>Criar Produto</p></div>} />
        </Link>
    );
}
