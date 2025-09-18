import { UseFormRegister } from "react-hook-form";
import { FormData } from "@/src/schema/form";

type CampoFormProps = {
    campo: string;
    type: string;
    id: string;
    name: keyof FormData;
    register: UseFormRegister<FormData>;
    errors: Partial<Record<keyof FormData, { message?: string }>>;
};

export default function CampoForm({ campo, type, id, name, register, errors }: CampoFormProps) {
    return (
        <div className="flex flex-col w-full items-start justify-center font-cormorant-sc text-white md:pr-7.5">
            <label htmlFor={id} className="text-dourado font-bold text-start text-base bp-540:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl w-full">{campo}:</label>
            <div className="w-full px-1.25 py-2.5 border-b border-dourado font-medium text-start text-sm bp-540:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                {type === "textarea" ? (
                    <textarea rows={3} id={id}  required={true} className="border-none focus:outline-none w-full" {...register(name)}></textarea>
                ) : (
                    <input type={type} id={id} required={true} className="border-none focus:outline-none w-full" {...register(name)} />
                )}
            </div>
            <label className="text-red-500">{errors[name]?.message}</label>

        </div>
    );
}
