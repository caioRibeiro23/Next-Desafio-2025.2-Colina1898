import Icones from "../icones/iconesFooter";
import Image from "next/image";
import Link from "next/link";
import { TextoFooter } from "../textoFooter/textoFooter";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-black text-dourado p-4 w-full px-10 py-5 gap-10">
        <div className="flex flex-col items-center justify-center w-full gap-2.5 md:flex-row md:justify-between">
            <div className="flex flex-col items-center justify-center px-2.5 py-2.5 gap-2.5 w-full">
                <span className="font-merriweather font-bold text-sm  items-center justify-center md:text-lg">Redes Sociais</span>
                <Icones icone1="instagram" icone2="facebook" icone3="whatsapp" />
            </div>
            <Link href='/' className = "flex gap-4 items-center w-full justify-center">
                <Image
                    src={'/logo/logo.png'}
                    alt="Logo do Vasco da Gama"
                    width={904}
                    height={904}
                    className="w-40 h-23"
                />
            </Link>
            <div className="flex flex-col items-center justify-center px-2.5 py-2.5 gap-1.25 w-full">
                <TextoFooter titulo="Telefone" conteudo="(32)991655636" />
            </div>
        </div>
        {/* parte de baixo footer */}
        <div className="flex flex-col justify-center px-2.5 py-7.5 w-full border-t-2 gap-5 border-dourado md:flex-row md:justify-between">
            <div className="flex flex-col justify-center items-center px-10 py-2.5 w-full gap-5 md:justify-between">
                <div className="flex flex-col items-center justify-center">
                    <TextoFooter titulo="Copyright" conteudo="© 2025 Colina1898. Todos os direitos reservados." />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-merriweather font-bold text-sm  text-center md:text-lg">Sua compra é 100% segura</span>
                    <Icones icone1="shield-lock" icone2="paypal" icone3="credit-card-2-back" />
                </div>
            </div>
            <div className="flex flex-col px-10 py-2.5 gap-2.5 items-center w-full">
                <TextoFooter titulo="Termos de Uso" conteudo="Ao utilizar a plataforma Colina1898, você concorda com nossos termos e condições. O conteúdo do site é protegido por direitos autorais. O uso indevido é proibido." />
            </div>
            <div className="flex flex-col px-10 py-2.5 gap-2.5 items-center w-full">
                <TextoFooter titulo="Política de Privacidade" conteudo="A sua privacidade é nossa prioridade. Coletamos informações para melhorar sua experiência e processar seus pedidos. Seus dados são protegidos e não serão compartilhados sem seu consentimento, exceto com prestadores de serviço e conforme exigido por lei." />
            </div>
        </div>
    </footer>
  );
}
