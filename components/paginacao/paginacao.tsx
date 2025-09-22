"use client";

import { usePathname, useSearchParams } from "next/navigation";
import BotaoPaginacao from "./botaoPaginacao";

export default function Paginacao({totalPages}: {totalPages: number}) {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page") || "1");

    const createPageURL = (pageNumber:number | string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", "1");
        params.set("page", pageNumber.toString());
        return `${pathName}?${params.toString()}`;
    };


    const generatePagination = (currentPage:number, totalPages:number) => {
        if(totalPages <= 7) {
            return Array.from({length: totalPages}, (_, i) => i + 1);
        }
        if(currentPage <=3) {
            return [1, 2, 3, 4, '...', totalPages-1, totalPages];
        }
        if(currentPage >= totalPages - 2) {
            return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
        }
        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    };
    const allPages = generatePagination(currentPage, totalPages);

    return (
        <div className="flex items-center justify-center gap-2.5 w-full">
            <BotaoPaginacao href={createPageURL(currentPage - 1)} texto={<i className="bi bi-skip-backward"></i>} />
            {allPages.map((page, index) => (
                <BotaoPaginacao key={index} href={createPageURL(page)} texto={page} className={page === currentPage ? "bg-black text-dourado border border-dourado" : ""} />
            ))}
            <BotaoPaginacao href={createPageURL(currentPage + 1)} texto={<i className="bi bi-skip-forward"></i>} />
        </div>
    );
}
