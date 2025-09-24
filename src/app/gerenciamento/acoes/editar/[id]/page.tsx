import { fetchProdutoById } from "@/actions/individual/actions";
import AcoesCrud from "@/components/gerenciamento/crud/AcoesCrud";

export default async function EditarProduto({
  params,
}: {
  params: { id: string }
}) {
  const id = parseInt(params.id, 10);
  const produto = await fetchProdutoById(id);
  return (
    <AcoesCrud editar={true} produto={produto} />
  );
}