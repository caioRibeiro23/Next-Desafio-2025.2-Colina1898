// app/page.tsx ou qualquer componente
export default function MapaPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[40%] bp-540:w-[50%] md:w-[40%] bp-840:w-[60%] lg:w-[70%] aspect-square rounded-2xl overflow-hidden shadow-lg border-3 border-dourado">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5938159688326!2d-43.23155992551494!3d-22.89145843732179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997eea3867ec07%3A0x4045827a66836f03!2sAv.%20Roberto%20Dinamite%2C%20117%20-%20Vasco%20da%20Gama%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020921-060!5e0!3m2!1spt-BR!2sbr!4v1758028651008!5m2!1spt-BR!2sbr" width="600" height="600" loading="lazy"></iframe>
      </div>
    </div>
  );
}
