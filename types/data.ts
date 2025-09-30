import { TipoProduto } from "@prisma/client";

export type ProdutoType = {
    id?: number;
    title?: string;
    principalImage?: string;
    secondaryImages?: string[];
    price?: number;
    description?: string;
    summary?: string;
    type?:TipoProduto;
}