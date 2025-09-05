"use client"

import { useEffect, useState } from "react";
import Produto from "../produto/produto";
import useEmblaCarousel from "embla-carousel-react";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

export default function Carrossel() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            slidesToScroll: 1, 
            breakpoints: {
                '(min-width: 768px)': { slidesToScroll: 2 }, 
                '(min-width: 1280px)': { slidesToScroll: 1 }  
            }
        },
        [WheelGesturesPlugin()]
    )
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    useEffect(() => {
        if (!emblaApi) return

        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()))
        emblaApi.on("reInit", () => setSelectedIndex(emblaApi.selectedScrollSnap()))
    }, [emblaApi])

    return (
        <div className="px-5 w-full">
            <div className=" flex flex-col px-2.5 py-7.5 gap-5 md:gap-7.5 w-full items-center justify-center bg-cinza/60 rounded-xl">
            
                <h1 className="text-dourado text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold text-center font-cormorant-sc">Veja Nossos Destaques</h1>

                {/*Carrossel*/}
                <div className="w-full flex items-center justify-center py-1.5 gap-0 bp-540:gap-7.5">

                    {/*Botão de voltar*/}
                    <i className="bi bi-chevron-compact-left text-dourado text-2xl bp-540:text-5xl sm:text-3xl md:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl cursor-pointer" onClick={() => emblaApi?.scrollPrev()}></i>

                    {/*Container com os cards*/}
                    <div className="overflow-hidden max-w-6xl" ref={emblaRef}>
                        <div className="flex w-full">
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                                <div
                                    key={n}
                                    className="flex flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-4 items-center justify-center w-fit"
                                >
                                    <Produto temDesc={false} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/*Botão de avançar*/}
                    <i className="bi bi-chevron-compact-right text-dourado text-2xl sm:text-3xl bp-540:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl cursor-pointer" onClick={() => emblaApi?.scrollNext()}></i>
                </div>
            </div>
        </div>
    );
}