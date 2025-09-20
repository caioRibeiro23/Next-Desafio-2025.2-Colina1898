/*
  Warnings:

  - You are about to drop the column `descricao` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `imagem` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `preco` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `resumo` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Produto` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Produto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Produto_nome_key";

-- AlterTable
ALTER TABLE "public"."Produto" DROP COLUMN "descricao",
DROP COLUMN "imagem",
DROP COLUMN "nome",
DROP COLUMN "preco",
DROP COLUMN "resumo",
DROP COLUMN "tipo",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "summary" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Produto_title_key" ON "public"."Produto"("title");
