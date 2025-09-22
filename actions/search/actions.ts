import prisma from "@/src/lib/db";

const itemsPerPage = 6;

export async function fetchFilterProdutos(query: string, currentPage: number) {
    const offset = (currentPage - 1) * itemsPerPage;
    const produtos = await prisma.produto.findMany({
        where: {
            OR: [{title: {contains: query, mode: "insensitive"}}, 
                {summary: {contains: query, mode: "insensitive"}}]
            },
    orderBy: { createdAt: 'desc' },
        take: itemsPerPage,
        skip: offset, 
    });
    //talvez seja usado futuramente
    const count = await prisma.produto.count({
        where: {
            OR: [{title: {contains: query, mode: "insensitive"}}, 
                {summary: {contains: query, mode: "insensitive"}}]
            },
    });

    const totalPages = Math.ceil(count / itemsPerPage);

    return { produtos, count, totalPages };
}