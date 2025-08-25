export function BotaoLogin() {
  return (
    <button className="flex items-center justify-center bg-dourado text-black px-3 py-2 gap-2.5 rounded-3xl border border-transparent cursor-pointer drop-shadow-[0_4px_4px_black]
        hover:bg-black/20 hover:text-dourado hover:border-dourado hover:backdrop-blur-sm transition-colors duration-500">
        <i className="bi bi-person text-2xl  items-center justify-center"></i>
      <span className="font-merriweather font-normal text-1xl  items-center justify-center">Login</span>
    </button>
  );
}
