"use client"

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebugValue, useEffect, useState } from "react";

export default function Search(){
    const searchParams = useSearchParams();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState<string | "">(searchParams.get("query") || "");

    const handleSearch = (query: string) => {
        if(!query){
            return
        }
        const params = new URLSearchParams();
        params.set("query", query);
        router.replace(`/produtos/?${params.toString()}`);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearch(searchTerm);
    }

    const handleClear = () => {
    setSearchTerm("");
    router.replace("/produtos");
    };

    useEffect(() => {
        setSearchTerm(searchParams.get("query") || "");
    }, [searchParams]);

    return (
        <div className="flex w-full items-center justify-center">
            <form className="bg-dourado rounded-2xl drop-shadow-[0_4px_4px_black] flex items-center justify-start gap-2.5 px-10 py-0.5 bp-540:py-1.5 xl:py-2.5 3xl:py-3.5 w-50 sm:w-70 bp-540:w-100 md:w-140 xl:w-180 3xl:w-220" id="search-form" autoComplete="off" onSubmit={handleSubmit}>
                <i className="bi bi-search text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-black"></i>
                <input type="text" placeholder="Buscar produtos" className="flex items-center w-full outline-none p-2 font-merriweather font-normal text-black text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl placeholder:text-black/70 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base  xl:placeholder:text-lg  2xl:placeholder:text-xl 3xl:placeholder:text-2xl" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <i onClick={handleClear} className="cursor-pointer bi bi-x-lg text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-black"></i>
            </form>
        </div>
    );
}
