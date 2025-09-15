"use client";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

export default function ZoomImage({ imagem, alt }: { imagem: string; alt: string })  {
  return (
    <Zoom>
      <Image
        src={imagem}
        alt={alt}
        width={900}
        height={900}
        className="w-25 sm:w-25 bp-540:w-25 md:w-25 bp-840:w-25 lg:w-40 object-cover rounded-2xl"
        />
    </Zoom>
  );
}