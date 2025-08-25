type TextoFooterProps = {
  titulo: string;
  conteudo: string;
};

export function TextoFooter({ titulo, conteudo }: TextoFooterProps) {
  return (
    <>
      <span className="font-merriweather font-bold text-lg  text-center">{titulo}</span>
      <span className="font-merriweather font-normal text-1xl  text-center">{conteudo}</span>
    </>
  );
}