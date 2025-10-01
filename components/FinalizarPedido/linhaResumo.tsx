export default function linhaResumo({título, valor}: { título: string; valor: number}) {
    return (
        <div className="flex items-center justify-between w-full">
            <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium">{título}:</span>
            <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium">R$ {valor.toFixed(2)}</span>
        </div>
    );
}
