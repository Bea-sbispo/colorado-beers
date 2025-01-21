import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Consultando as cervejas no banco de dados
    const beers = await prisma.beverage.findMany({
      include: {
        availableSizes: true,
        nutrients: true,
        ingredients: true,
        origin: true,
        tastingNotes: true,
        pairing: true,
        idealGlass: true,
      },
    });

    return new Response(JSON.stringify(beers), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Erro ao buscar as cervejas.", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
