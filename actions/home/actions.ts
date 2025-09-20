"use server";

import prisma from "@/lib/db";

export default async function getLancamentos() {
    const posts = await prisma.produto.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        select: {
            id: true,
            title: true,
            image: true,
            price: true,
        },
        take: 6
    });
    return posts;
}

