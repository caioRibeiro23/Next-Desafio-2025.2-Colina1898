import Image from "next/image";

export default function ImagemMenor(props: { src: string; alt: string }) {
    return (
        <Image
            src={props.src}
            alt={props.alt} 
            width={900}
            height={900}
            className="w-15 sm:w-18 bp-540:w-25 md:w-30 lg:w-35 xl:w-40 2xl:w-50 3xl:w-60 object-cover rounded-2xl border-dourado border-4 hover:scale-105 transition-transform duration-200 drop-shadow-[0_4px_4px_black] cursor-pointer"
        />
    );
}