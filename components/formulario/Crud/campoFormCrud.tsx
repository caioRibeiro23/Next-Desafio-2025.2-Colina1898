type CampoFormProps = {
    campo: string;
    type: string;
    id: string;
    name: string;
    defaultValue: string;
    visualizar?: boolean;
};

const options = [
  { value: "VESTUARIO", label: "Vestuário" },
  { value: "OBJETO", label: "Outros" },
];

export default function CampoFormCrud({ campo, type, id, name, defaultValue, visualizar = false }: CampoFormProps) {
    return (
        <div className="flex flex-col w-full items-start justify-center font-cormorant-sc text-white md:pr-7.5">
            <label htmlFor={id} className="text-dourado font-bold text-start text-base bp-540:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl w-full">{campo}:</label>
            <div className="w-full px-1.25 py-2.5 border-b border-dourado font-medium text-start text-sm bp-540:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                {type === "textarea" ? (
                    <textarea rows={3} id={id} name={name} required={true} className="border-none focus:outline-none w-full" defaultValue={defaultValue} readOnly={visualizar}></textarea>
                ) : name === "category" ? (
                    <select id={id} name={name} required={true} className={`border-none focus:outline-none w-full text-white ${visualizar ? "appearance-none" : ""}`} defaultValue={defaultValue} disabled={visualizar}>
                        <option value="" className="text-black bg-dourado ">Selecione uma categoria</option>
                        {options.map(({ value, label }) => (
                            <option key={value} value={value} className="text-black bg-dourado">{label}</option>
                        ))}
                    </select>
                ) : (
                    <input type={type} id={id} name={name} required={true} className="border-none focus:outline-none w-full" defaultValue={defaultValue} readOnly={visualizar}/>
                )}
            </div>
        </div>
    );
}
