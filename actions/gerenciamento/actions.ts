"use server";

import prisma from "@/src/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export async function deleteProduto(id: number) {
    await prisma.produto.delete({
        where: { id }
    });
    revalidatePath("/gerenciamento");
}

export async function updateProduto(id: number | undefined, formData: FormData){
    const nome = formData.get("name")?.toString() || "";
    const price = parseFloat(formData.get("price")?.toString() || "0");
    const summary = formData.get("summary")?.toString() || "";
    const description = formData.get("description")?.toString() || "";

    await prisma.produto.update({
        where: { id },
        data: {
            title: nome,
            price,
            summary,
            description
        }
    });
    redirect("/gerenciamento");
}

// const numberSecundaryImages = 3;
// export async function createProduto(formData: FormData) {
//     const nome = formData.get("name")?.toString() || "";
//     const price = parseFloat(formData.get("price")?.toString() || "0");
//     const summary = formData.get("summary")?.toString() || "";
//     const description = formData.get("description")?.toString() || "";

//     const principalFile = formData.get("principalImage");
//     let principalImageUrl = "";
//     if (principalFile instanceof File && principalFile.size > 0) {
//         principalImageUrl = await uploadImage(principalFile);
//     }

//     // Pega as secundárias
//     const secondaryImages: string[] = [];
//     for (let i = 0; i < numberSecundaryImages; i++) {
//         const file = formData.get(`image-${i}`);
//         if (file instanceof File && file.size > 0) {
//         secondaryImages.push(await uploadImage(file));
//         }
//     }

//     await prisma.produto.create({
//         data: {
//             title: nome,
//             price,
//             summary,
//             description,
//             principalImage: principalImageUrl,
//             secondaryImages,
//             type: "VESTUARIO"
//         }
//     });
//     redirect("/gerenciamento");
// }