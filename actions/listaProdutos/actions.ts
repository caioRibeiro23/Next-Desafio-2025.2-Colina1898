"use server";

import prisma from "@/src/lib/db";

export async function getProdutos() {
    const produtos = await prisma.produto.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        select: {
            id: true,
            title: true,
            image: true,
            price: true,
            summary: true
        }
    });
    return produtos;
}