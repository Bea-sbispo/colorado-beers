import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const beers = await prisma.beverage.findMany({
      include: {
        availableSizes: true,
        nutrients: { include: { nutrient: true } },
        ingredients: { include: { ingredient: true } },
        origin: { include: { origin: true } },
        tastingNotes: { include: { tastingNote: true } },
        pairing: { include: { pairing: true } },
        idealGlass: { include: { idealGlass: true } },
      },
    });

    const formattedBeers = beers.map((beer) => ({
      name: beer.name,
      can_type: beer.canType,
      main_color: beer.mainColor,
      available_sizes: beer.availableSizes.map((size) => ({
        image: size.image,
        volume: size.volume,
      })),
      bitterness: beer.bitterness,
      alcohol_content: beer.alcoholContent,
      nutrients: beer.nutrients.map((n) => ({
        icon: n.nutrient.icon,
        name: n.nutrient.name,
        amount: n.amount,
      })),
      ingredients: beer.ingredients.map((i) => ({
        icon: i.ingredient.icon,
        name: i.ingredient.name,
      })),
      origin: beer.origin.map((o) => ({
        icon: o.origin.icon,
        name: o.origin.name,
      })),
      tasting_notes: beer.tastingNotes.map((t) => ({
        icon: t.tastingNote.icon,
        name: t.tastingNote.name,
      })),
      pairing: beer.pairing.map((p) => ({
        icon: p.pairing.icon,
        name: p.pairing.name,
      })),
      ideal_glass: beer.idealGlass.map((g) => ({
        icon: g.idealGlass.icon,
        name: g.idealGlass.name,
      })),
    }));

    return new Response(JSON.stringify(formattedBeers), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Erro ao buscar as cervejas.", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
