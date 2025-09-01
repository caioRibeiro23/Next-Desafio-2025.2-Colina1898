import BotaoPaginacao from "./botaoPaginacao";

export default function Paginacao(){
    return (
        <div className="flex items-center justify-center gap-2.5 w-full">
            <BotaoPaginacao texto={<i className="bi bi-skip-backward"></i>} />
            <BotaoPaginacao texto="1" />
            <BotaoPaginacao texto="2" />
            <BotaoPaginacao texto="3" />
            <BotaoPaginacao texto="4" />
            <BotaoPaginacao texto={<i className="bi bi-skip-forward"></i>} />
        </div>
    );
}
