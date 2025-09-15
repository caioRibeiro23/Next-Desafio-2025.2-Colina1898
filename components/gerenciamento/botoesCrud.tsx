import Link from "next/link";

import Botao from "../botaoPadrao/botao";

export default function BotoesCrud() {
  return (
    <div className="flex gap-2.5">
        <Link href="/gerenciamento/visualizar">
          <Botao texto={<i className="bi bi-eye-fill px-0.5"></i>} />
        </Link>
        <Link href="/gerenciamento/editar">
          <Botao texto={<i className="bi bi-pencil-square px-0.5"></i>} />
        </Link>
        <Link href="/gerenciamento/deletar">
          <Botao texto={<i className="bi bi-trash-fill px-0.5"></i>} />
        </Link>
    </div>
  );
}
