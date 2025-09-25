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

export async function updateProduto(id: number | undefined, formData: FormData){
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
        let newPrincipalImageURL: string | undefined;
        if (principalImageFile && principalImageFile.size > 0)  {
            const blob = await put(principalImageFile.name, principalImageFile, {
                access: 'public',
                addRandomSuffix: true,
            });
            newPrincipalImageURL = blob.url;
        }
        const newSecundaryImagesURLs: string[] = [];
        for (const file of secundaryImagesFiles) {
            if (file && file.size > 0) {
                const blob = await put(file.name, file, {
                    access: 'public',
                    addRandomSuffix: true,
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
        revalidatePath("/gerenciamento"); 
        redirect("/gerenciamento");
}

export async function createProduto(formData: FormData) {
    const nome = formData.get("name")?.toString() || "";
    const price = parseFloat(formData.get("price")?.toString() || "0");
    const summary = formData.get("summary")?.toString() || "";
    const description = formData.get("description")?.toString() || "";
    const principalFile = formData.get("principalImage") as File | null;
    const secundaryFiles = [
        formData.get("image-0") as File | null,
        formData.get("image-1") as File | null,
        formData.get("image-2") as File | null
    ];
    let principalImageUrl = "";
    if (principalFile && principalFile.size > 0) {
        const blob = await put(principalFile.name, principalFile, {
            access: 'public',
            addRandomSuffix: true,
        });
        principalImageUrl = blob.url;
    }
    const secondaryImages: string[] = [];
    for (const file of secundaryFiles) {
        if (file && file.size > 0) {
            const blob = await put(file.name, file, {
                access: 'public',
                addRandomSuffix: true,
            });
            secondaryImages.push(blob.url);
        }
    }
    await prisma.produto.create({
        data: {
            title: nome,
            price,
            summary,
            description,
            principalImage: principalImageUrl,
            secondaryImages,
            type: "VESTUARIO"
        }
    });
    redirect("/gerenciamento");
}
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