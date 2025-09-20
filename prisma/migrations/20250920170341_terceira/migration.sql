-- CreateEnum
CREATE TYPE "public"."TipoProduto" AS ENUM ('VESTUARIO', 'OBJETO');

-- Altera a tabela para adicionar as novas colunas
-- Elas não podem ser NOT NULL aqui para não dar erro com os dados existentes
ALTER TABLE "public"."Produto" 
  ADD COLUMN "principalImage" TEXT,
  ADD COLUMN "secondaryImages" TEXT[];

-- Atualiza as colunas de tipo (string para enum)
-- Use a expressão CASE para maior eficiência
UPDATE "public"."Produto"
SET "type" = CASE "type"
    WHEN 'Eletrônicos' THEN 'OBJETO'
    WHEN 'Vestuário' THEN 'VESTUARIO'
    ELSE 'OBJETO' -- Adicione um valor padrão para qualquer tipo não mapeado
END;

-- Converte a coluna para o tipo Enum
ALTER TABLE "public"."Produto"
  ALTER COLUMN "type" TYPE "public"."TipoProduto" USING "type"::"public"."TipoProduto";

-- Atualiza a nova coluna `principalImage` com valores
-- Use a coluna 'image' existente para migrar os dados
UPDATE "public"."Produto"
SET "principalImage" = "image";

-- Remove a coluna antiga `image`
ALTER TABLE "public"."Produto" DROP COLUMN "image";

-- Torna as colunas 'principalImage' e 'type' obrigatórias (NOT NULL)
-- A coluna 'type' já foi definida como NOT NULL na linha 14, então não é necessário aqui
ALTER TABLE "public"."Produto"
  ALTER COLUMN "principalImage" SET NOT NULL;