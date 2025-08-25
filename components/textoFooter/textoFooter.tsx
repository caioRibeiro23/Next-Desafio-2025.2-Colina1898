type TextoFooterProps = {
  titulo: string;
  conteudo: string;
};

export function TextoFooter({ titulo, conteudo }: TextoFooterProps) {
  return (
    <>
      <span className="font-merriweather font-bold text-sm md:text-lg  text-center">{titulo}</span>
      <span className="font-merriweather font-normal text-sm md:text-1xl  text-center">{conteudo}</span>
    </>
  );
}