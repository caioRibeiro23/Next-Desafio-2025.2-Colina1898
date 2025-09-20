"use server";

import prisma from "@/src/lib/db";

export async function fetchProdutoById(id: number) {
    const produto = await prisma.produto.findUnique({
        where: { id },
    });
    return produto;
}