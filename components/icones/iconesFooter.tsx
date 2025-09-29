import Link from "next/link";

type IconesProps = {
  icone1: string;
  icone2: string;
  icone3: string;
};

export default function IconesFooter({ icone1, icone2, icone3 }: IconesProps) {
    return (
    <div className="flex items-center justify-center gap-2.5">
      <Link href="https://www.instagram.com" target ="_blank" rel="noopener noreferrer">
        <i className={`bi bi-${icone1} text-2xl  items-center justify-center`}></i>
      </Link>
      <Link href="https://www.facebook.com" target ="_blank" rel="noopener noreferrer">
        <i className={`bi bi-${icone2} text-2xl  items-center justify-center`}></i>
      </Link>
      <Link href="https://www.whatsapp.com" target ="_blank" rel="noopener noreferrer">
        <i className={`bi bi-${icone3} text-2xl  items-center justify-center`}></i>
      </Link>
    </div>  
  );
}