import Botao from "../botaoPadrao/botao";

export default function BotoesCrud() {
  return (
    <div className="flex gap-2.5">
      <Botao texto={<i className="bi bi-eye-fill px-0.5"></i>} />
      <Botao texto={<i className="bi bi-pencil-square px-0.5"></i>} />
      <Botao texto={<i className="bi bi-trash-fill px-0.5"></i>} />
    </div>
  );
}
