import { useState } from "react";
type CampoFormProps = {
    campo: string;
    type: string;
    id: string;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function CampoFormLogin({ campo, type, id, name, onChange }: CampoFormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;
    return (
        <div className="flex flex-col w-full items-center justify-center font-cormorant-sc text-white ">
            <label htmlFor={id} className="text-dourado font-bold text-start text-base bp-540:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl w-full">{campo}:</label>
            <div className=" flex flex-row w-full px-1.25 py-1 border-b border-dourado font-medium text-start text-sm bp-540:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                {type === "textarea" ? (
                    <textarea rows={3} id={id} name={name} required={true} className="border-none focus:outline-none w-full text-dourado"></textarea>
                ) : (type === "password" ? (
                    <input onChange={onChange} type={inputType} id={id} name={name} required={true} className="border-none focus:outline-none w-full text-dourado    "/>
                ) : (
                    <input type={inputType} id={id} name={name} required={true} className="border-none focus:outline-none w-full text-dourado    "/>
                ))}
                {isPassword && (
                    <button type="button" onClick={togglePasswordVisibility} className="self-center ml-2 focus:outline-none">
                        <i className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"} text-dourado text-sm bp-540:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl`}></i>
                    </button>
                )}
            </div>
        </div>
    );
}
