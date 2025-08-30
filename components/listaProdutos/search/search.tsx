export default function Search(){
    return (
        <div className="flex w-full items-center justify-center">
            <form className="bg-dourado rounded-2xl drop-shadow-[0_4px_4px_black] flex items-center justify-start gap-2.5 px-10 py-0.5 bp-540:py:1.5 w-50 sm:w-70 bp-540:w-100 md:w-140" id="search-form" autoComplete="off">
                <i className="bi bi-search text-xs sm:text-sm md:text-lg lg:text-xl text-black"></i>
                <input type="text" placeholder="Buscar produtos" className="flex items-center w-full outline-none p-2 font-merriweather font-normal text-black text-sm sm:text-base md:text-lg placeholder:text-black/70 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base" />
            </form>
        </div>
    );
}
