import FormularioLogin from "@/components/formulario/login/formularioLogin";

export default function LoginPage() {
    return (
        <div className = "grid grid-cols-1 md:grid-cols-2 h-screen w-full">
            <div className="bg-[url('/fundo/fundoTorcida.jpg')] bg-cover bg-center  bg-black/97 bg-blend-darken flex flex-col items-center justify-center gap-5 p-2.5 w-full h-full border-r border-dourado">
                <h1 className="font-cormorant-sc text-dourado text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold mb-5 text-cente">Olá Gigante!</h1>
                <h2 className="font-cormorant-sc text-dourado text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold mb-5 text-center px-7.5">Entre e celebre a nossa história. A colina espera por você.</h2>

                <FormularioLogin />
            </div>
            <div className="hidden md:flex bg-[url('/fundo/fundoLogin.jpg')] bg-cover bg-center bg-black/55 bg-blend-darken w-full h-full"></div>
        </div>
    );
}