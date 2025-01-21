/*
  Warnings:

  - You are about to drop the column `can_type` on the `Beverage` table. All the data in the column will be lost.
  - Added the required column `canType` to the `Beverage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Beverage" DROP COLUMN "can_type",
ADD COLUMN     "canType" TEXT NOT NULL;
