/*
  Warnings:

  - You are about to drop the `IdealGlass` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nutrient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Origin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pairing` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TastingNote` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "IdealGlassBeverage" DROP CONSTRAINT "IdealGlassBeverage_idealGlassId_fkey";

-- DropForeignKey
ALTER TABLE "IngredientsBeverage" DROP CONSTRAINT "IngredientsBeverage_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "NutrientsBeverage" DROP CONSTRAINT "NutrientsBeverage_nutrientId_fkey";

-- DropForeignKey
ALTER TABLE "OriginsBeverage" DROP CONSTRAINT "OriginsBeverage_originId_fkey";

-- DropForeignKey
ALTER TABLE "PairingsBeverage" DROP CONSTRAINT "PairingsBeverage_pairingId_fkey";

-- DropForeignKey
ALTER TABLE "TastingNotesBeverage" DROP CONSTRAINT "TastingNotesBeverage_tastingNoteId_fkey";

-- DropTable
DROP TABLE "IdealGlass";

-- DropTable
DROP TABLE "Ingredient";

-- DropTable
DROP TABLE "Nutrient";

-- DropTable
DROP TABLE "Origin";

-- DropTable
DROP TABLE "Pairing";

-- DropTable
DROP TABLE "TastingNote";
