type IconesProps = {
  icone1: string;
  icone2: string;
  icone3: string;
};

export default function Icones({ icone1, icone2, icone3 }: IconesProps) {
    return (
    <div className="flex items-center justify-center gap-2.5">
        <i className={`bi bi-${icone1} text-2xl  items-center justify-center`}></i>
        <i className={`bi bi-${icone2} text-2xl  items-center justify-center`}></i>
        <i className={`bi bi-${icone3} text-2xl  items-center justify-center`}></i>
    </div>  
  );
}