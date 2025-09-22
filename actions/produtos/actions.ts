"use server";

import prisma from "@/src/lib/db";

const itemsPerPage = 3;

export async function getProdutos(currentPage: number) {
    const offset = (currentPage - 1) * itemsPerPage;
    const produtos = await prisma.produto.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        select: {
            id: true,
            title: true,
            principalImage: true,
            price: true,
        },
        take: itemsPerPage,
        skip: offset
    });

    const count = await prisma.produto.count();
    const totalPages = Math.ceil(count / itemsPerPage);
    return { produtos, totalPages };
}