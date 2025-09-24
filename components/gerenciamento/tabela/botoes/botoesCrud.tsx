import Link from "next/link";
import EditButton from "./editButton";
import ViewButton from "./viewButton";
import RemoveButton from "./removeButton";
import { ProdutoType } from "@/types/data";
import { useState } from "react";
import ModalExcluir from "../../crud/modalExcluir";

export default function BotoesCrud({ produto }: { produto: ProdutoType }) {
  const [showModal, setShowModal] = useState(false);
  function fecharModal() {
    setShowModal(false);
  }
  function abrirModal() {
    setShowModal(true);
  }
  return (
    <div className="flex flex-col bp-540:flex-row gap-1">
        <Link href={`/gerenciamento/acoes/visualizar/${produto?.id}`}>
          <ViewButton id={produto?.id} />
        </Link>
        <Link href={`/gerenciamento/acoes/editar/${produto?.id}`}>
          <EditButton id={produto?.id} />
        </Link>
        <div onClick={() => abrirModal()}>
          <RemoveButton />
        </div>
          {showModal && (
            <ModalExcluir  id={produto?.id} onFechar={fecharModal} />
          )}
    </div>
  );
}
