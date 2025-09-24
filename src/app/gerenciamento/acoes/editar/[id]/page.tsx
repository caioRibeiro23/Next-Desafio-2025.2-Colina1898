import { fetchProdutoById } from "@/actions/individual/actions";
import AcoesCrud from "@/components/gerenciamento/crud/AcoesCrud";

export default async function EditarProduto({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = parseInt((await params).id, 10);
  const produto = await fetchProdutoById(id);
  return (
    <AcoesCrud editar={true} produto={produto} />
  );
}