import { fetchProdutoById } from "@/actions/individual/actions";
import AcoesCrud from "@/components/gerenciamento/crud/AcoesCrud";
import EditOrView from "@/components/gerenciamento/crud/AcoesCrud";

export default async function VisualizarProduto({params}: {params: {id: string}}) {
  const id = parseInt(params.id, 10);
  const produto = await fetchProdutoById(id);
  return (
    <AcoesCrud visualizar={true} produto={produto} />
  );
}