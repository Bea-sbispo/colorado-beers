/*
  Warnings:

  - You are about to drop the column `beverageId` on the `IdealGlass` table. All the data in the column will be lost.
  - You are about to drop the column `beverageId` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `Nutrient` table. All the data in the column will be lost.
  - You are about to drop the column `beverageId` on the `Nutrient` table. All the data in the column will be lost.
  - You are about to drop the column `beverageId` on the `Origin` table. All the data in the column will be lost.
  - You are about to drop the column `beverageId` on the `Pairing` table. All the data in the column will be lost.
  - You are about to drop the column `beverageId` on the `TastingNote` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "IdealGlass" DROP CONSTRAINT "IdealGlass_beverageId_fkey";

-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_beverageId_fkey";

-- DropForeignKey
ALTER TABLE "Nutrient" DROP CONSTRAINT "Nutrient_beverageId_fkey";

-- DropForeignKey
ALTER TABLE "Origin" DROP CONSTRAINT "Origin_beverageId_fkey";

-- DropForeignKey
ALTER TABLE "Pairing" DROP CONSTRAINT "Pairing_beverageId_fkey";

-- DropForeignKey
ALTER TABLE "TastingNote" DROP CONSTRAINT "TastingNote_beverageId_fkey";

-- AlterTable
ALTER TABLE "IdealGlass" DROP COLUMN "beverageId";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "beverageId";

-- AlterTable
ALTER TABLE "Nutrient" DROP COLUMN "amount",
DROP COLUMN "beverageId";

-- AlterTable
ALTER TABLE "Origin" DROP COLUMN "beverageId";

-- AlterTable
ALTER TABLE "Pairing" DROP COLUMN "beverageId";

-- AlterTable
ALTER TABLE "TastingNote" DROP COLUMN "beverageId";

-- CreateTable
CREATE TABLE "NutrientsBeverage" (
    "id" SERIAL NOT NULL,
    "nutrientId" INTEGER NOT NULL,
    "beverageId" INTEGER NOT NULL,
    "amount" TEXT NOT NULL,

    CONSTRAINT "NutrientsBeverage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IngredientsBeverage" (
    "id" SERIAL NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "beverageId" INTEGER NOT NULL,

    CONSTRAINT "IngredientsBeverage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OriginsBeverage" (
    "id" SERIAL NOT NULL,
    "originId" INTEGER NOT NULL,
    "beverageId" INTEGER NOT NULL,

    CONSTRAINT "OriginsBeverage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TastingNotesBeverage" (
    "id" SERIAL NOT NULL,
    "tastingNoteId" INTEGER NOT NULL,
    "beverageId" INTEGER NOT NULL,

    CONSTRAINT "TastingNotesBeverage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PairingsBeverage" (
    "id" SERIAL NOT NULL,
    "pairingId" INTEGER NOT NULL,
    "beverageId" INTEGER NOT NULL,

    CONSTRAINT "PairingsBeverage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IdealGlassBeverage" (
    "id" SERIAL NOT NULL,
    "idealGlassId" INTEGER NOT NULL,
    "beverageId" INTEGER NOT NULL,

    CONSTRAINT "IdealGlassBeverage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NutrientsBeverage" ADD CONSTRAINT "NutrientsBeverage_nutrientId_fkey" FOREIGN KEY ("nutrientId") REFERENCES "Nutrient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NutrientsBeverage" ADD CONSTRAINT "NutrientsBeverage_beverageId_fkey" FOREIGN KEY ("beverageId") REFERENCES "Beverage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredientsBeverage" ADD CONSTRAINT "IngredientsBeverage_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredientsBeverage" ADD CONSTRAINT "IngredientsBeverage_beverageId_fkey" FOREIGN KEY ("beverageId") REFERENCES "Beverage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OriginsBeverage" ADD CONSTRAINT "OriginsBeverage_originId_fkey" FOREIGN KEY ("originId") REFERENCES "Origin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OriginsBeverage" ADD CONSTRAINT "OriginsBeverage_beverageId_fkey" FOREIGN KEY ("beverageId") REFERENCES "Beverage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TastingNotesBeverage" ADD CONSTRAINT "TastingNotesBeverage_tastingNoteId_fkey" FOREIGN KEY ("tastingNoteId") REFERENCES "TastingNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TastingNotesBeverage" ADD CONSTRAINT "TastingNotesBeverage_beverageId_fkey" FOREIGN KEY ("beverageId") REFERENCES "Beverage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PairingsBeverage" ADD CONSTRAINT "PairingsBeverage_pairingId_fkey" FOREIGN KEY ("pairingId") REFERENCES "Pairing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PairingsBeverage" ADD CONSTRAINT "PairingsBeverage_beverageId_fkey" FOREIGN KEY ("beverageId") REFERENCES "Beverage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IdealGlassBeverage" ADD CONSTRAINT "IdealGlassBeverage_idealGlassId_fkey" FOREIGN KEY ("idealGlassId") REFERENCES "IdealGlass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IdealGlassBeverage" ADD CONSTRAINT "IdealGlassBeverage_beverageId_fkey" FOREIGN KEY ("beverageId") REFERENCES "Beverage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
