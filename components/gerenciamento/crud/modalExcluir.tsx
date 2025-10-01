import Botao from "@/components/botaoPadrao/botao";
import { deleteProduto } from "@/actions/gerenciamento/actions";

export default function ModalExcluir({id, onFechar}: {id: number | undefined, onFechar: () => void}) {
    return (
        <div onClick={onFechar} className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60`}>
            <div onClick={(e) => e.stopPropagation()} className="w-80 bp-540:w-118 flex gap-4 flex-col bg-cinzaEscuro border-3 border-black rounded-2xl drop-shadow-[0_4px_4px_black] ">
                <div className="w-full px-2.5 py-5 bg-dourado rounded-t-2xl flex items-center justify-center">
                    <h1 className="text-black text-lg bp-540:text-xl bp-840:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-regular font-cormorant-sc text-center">Excluir Produto</h1>
                </div>
                <div>
                    <p className="text-dourado text-base bp-540:text-lg bp-840:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl px-5 font-bold font-cormorant-sc text-center w-full">Tem certeza que deseja excluir este produto?</p>
                </div>
                <div className="flex items-center justify-center gap-5 w-full pb-5">
                    <Botao texto="Cancelar" onClick={onFechar}/>
                    <Botao texto="Excluir" onClick={() => id && deleteProduto(id)}/>
                </div>
            </div>
        </div>
    );
}