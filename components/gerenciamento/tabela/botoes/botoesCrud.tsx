import Link from "next/link";
import EditButton from "./editButton";
import ViewButton from "./viewButton";
import RemoveButton from "./removeButton";

export default function BotoesCrud() {
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
