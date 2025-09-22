import Link from "next/link";
import EditButton from "./editButton";
import ViewButton from "./viewButton";
import RemoveButton from "./removeButton";
import { ProdutoType } from "@/types/data";

export default function BotoesCrud({ produto }: { produto: ProdutoType }) {
  return (
    <div className="flex flex-col bp-540:flex-row gap-1">
        <Link href="/gerenciamento/acoes/visualizar">
          <ViewButton />
        </Link>
        <Link href="/gerenciamento/acoes/editar">
          <EditButton />
        </Link>
        <Link href="/gerenciamento/acoes/deletar">
          <RemoveButton />
        </Link>
    </div>
  );
}
