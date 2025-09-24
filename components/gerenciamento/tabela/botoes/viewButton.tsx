import BaseButton from "@/components/gerenciamento/tabela/botoes/baseButton";

export default function ViewButton({id}: {id: number | undefined}) {
    return (
        <BaseButton onClick={() => id && ""} icon={<i className="bi bi-eye-fill text-sm bp-540:text-base bp-840:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl"></i>} />
    );
}