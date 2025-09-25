"use server";

import prisma from "@/src/lib/db";
import { ProdutoType } from "@/types/data";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { put } from "@vercel/blob";

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

export async function updateProduto(id: number | undefined, formData: FormData): Promise<ProdutoType | null> {
    const nome = formData.get("name")?.toString() || "";
    const price = parseFloat(formData.get("price")?.toString() || "0");
    const summary = formData.get("summary")?.toString() || "";
    const description = formData.get("description")?.toString() || "";
    const principalImageFile = formData.get("principalImage") as File | null;
    const secundaryImagesFiles = [
        formData.get("image-0") as File | null,
        formData.get("image-1") as File | null,
        formData.get("image-2") as File | null
    ];
    try {
        let newPrincipalImageURL: string | undefined;
        if (principalImageFile && principalImageFile.size > 0)  {
            const blob = await put(principalImageFile.name, principalImageFile, {
                access: 'public',
            });
            newPrincipalImageURL = blob.url;
        }
        const newSecundaryImagesURLs: string[] = [];
        for (const file of secundaryImagesFiles) {
            if (file && file.size > 0) {
                const blob = await put(file.name, file, {
                    access: 'public',
                });
                newSecundaryImagesURLs.push(blob.url);
            } else {
                newSecundaryImagesURLs.push("");
            }
        }
        const currentProduto = await prisma.produto.findUnique({
            where: { id },
            select: { principalImage: true, secondaryImages: true }
        });

        if(!currentProduto) {
            throw new Error("Produto não encontrado.");
        }

        const finalPrincipalImage = newPrincipalImageURL || currentProduto.principalImage;
        const finalSecondaryImages = currentProduto.secondaryImages.map((img, index) => {
            return newSecundaryImagesURLs[index] || img || "";
        });
        await prisma.produto.update({
        where: { id },
        data: {
            title: nome,
            price,
            summary,
            description,
            principalImage: finalPrincipalImage,
            secondaryImages: finalSecondaryImages
        }
        });
        redirect("/gerenciamento");
    } catch (error) {
        console.error("Erro ao atualizar o produto:", error);
        return null;
    }
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