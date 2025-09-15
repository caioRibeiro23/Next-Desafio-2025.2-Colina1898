import AcoesCrud from "@/components/gerenciamento/crud/AcoesCrud";
import EditOrView from "@/components/gerenciamento/crud/AcoesCrud";

export default function VisualizarProduto() {
  return (
    <AcoesCrud visualizar={true} />
  );
}