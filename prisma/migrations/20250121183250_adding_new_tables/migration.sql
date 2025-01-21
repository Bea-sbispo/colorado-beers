-- CreateTable
CREATE TABLE "Beverage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "can_type" TEXT NOT NULL,
    "bitterness" TEXT NOT NULL,
    "alcoholContent" TEXT NOT NULL,

    CONSTRAINT "Beverage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableSize" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "volume" TEXT NOT NULL,
    "beverageId" INTEGER NOT NULL,

    CONSTRAINT "AvailableSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nutrient" (
    "id" SERIAL NOT NULL,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "beverageId" INTEGER NOT NULL,

    CONSTRAINT "Nutrient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "beverageId" INTEGER NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Origin" (
    "id" SERIAL NOT NULL,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "beverageId" INTEGER NOT NULL,

    CONSTRAINT "Origin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TastingNote" (
    "id" SERIAL NOT NULL,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "beverageId" INTEGER NOT NULL,

    CONSTRAINT "TastingNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pairing" (
    "id" SERIAL NOT NULL,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "beverageId" INTEGER NOT NULL,

    CONSTRAINT "Pairing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IdealGlass" (
    "id" SERIAL NOT NULL,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "beverageId" INTEGER NOT NULL,

    CONSTRAINT "IdealGlass_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AvailableSize" ADD CONSTRAINT "AvailableSize_beverageId_fkey" FOREIGN KEY ("beverageId") REFERENCES "Beverage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nutrient" ADD CONSTRAINT "Nutrient_beverageId_fkey" FOREIGN KEY ("beverageId") REFERENCES "Beverage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_beverageId_fkey" FOREIGN KEY ("beverageId") REFERENCES "Beverage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Origin" ADD CONSTRAINT "Origin_beverageId_fkey" FOREIGN KEY ("beverageId") REFERENCES "Beverage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TastingNote" ADD CONSTRAINT "TastingNote_beverageId_fkey" FOREIGN KEY ("beverageId") REFERENCES "Beverage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pairing" ADD CONSTRAINT "Pairing_beverageId_fkey" FOREIGN KEY ("beverageId") REFERENCES "Beverage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IdealGlass" ADD CONSTRAINT "IdealGlass_beverageId_fkey" FOREIGN KEY ("beverageId") REFERENCES "Beverage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
