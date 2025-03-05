/*
  Warnings:

  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "IngredientsBeverage" DROP CONSTRAINT "IngredientsBeverage_ingredientId_fkey";

-- DropTable
DROP TABLE "Ingredient";
