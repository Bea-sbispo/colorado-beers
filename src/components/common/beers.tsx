"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Beer {
  id: number;
  name: string;
  can_type: string;
  availableSizes: { image: string; volume: string }[];
  bitterness: string;
  alcoholContent: string;
  nutrients: {
    nutrientId: number;
    amount: string;
    icon: string;
    name: string;
  }[];
  ingredients: {
    ingredientId: number;
    icon: string;
    name: string;
  }[];
  origin: {
    originId: number;
    icon: string;
    name: string;
  }[];
  tastingNotes: {
    tastingNoteId: number;
    icon: string;
    name: string;
  }[];
  pairing: {
    pairingId: number;
    icon: string;
    name: string;
  }[];
  idealGlass: {
    idealGlassId: number;
    icon: string;
    name: string;
  }[];
}

export function BeersList() {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    // const fetchBeers = async () => {
    //   try {
    //     const response = await fetch("/api/beers");
    //     const data = await response.json();
    //     setBeers(data);
    //   } catch (error) {
    //     console.error("Erro ao carregar as cervejas:", error);
    //   }
    // };
    // fetchBeers();
  }, []);

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="mb-6 text-3xl font-bold text-red-500">Nossas Cervejas</h1>

      <div className="grid grid-cols-2 gap-6">
        {beers.length > 0 ? (
          beers.map((beer) => (
            <div
              key={beer.id}
              className="rounded-lg bg-white p-4 text-black shadow"
            >
              <h2 className="text-xl font-semibold">{beer.name}</h2>
              <p>{beer.can_type}</p>
              <p>
                <strong>Amargor:</strong> {beer.bitterness} |{" "}
                <strong>Teor Alc.:</strong> {beer.alcoholContent}
              </p>

              {/* Tamanhos Disponíveis */}
              <h3 className="mt-4 text-lg font-medium">
                Tamanhos Disponíveis:
              </h3>
              <div className="flex flex-wrap gap-3">
                {beer.availableSizes.map((size) => (
                  <div key={size.image} className="flex flex-col items-center">
                    <Image
                      src={`/assets/img/products/${size.image}`}
                      width={50}
                      height={50}
                      alt={size.volume}
                    />
                    <p>{size.volume}</p>
                  </div>
                ))}
              </div>

              {/* Nutrientes */}
              <h3 className="mt-4 text-lg font-medium">Nutrientes:</h3>
              <ul>
                {beer.nutrients.map((nutrient, k) => (
                  <li key={k}>
                    <Image
                      src={`/assets/img/icons/${nutrient.icon}`}
                      width={40}
                      height={40}
                      alt={nutrient.name}
                    />
                    <strong>
                      {nutrient.name} - {nutrient.amount}
                    </strong>
                  </li>
                ))}
              </ul>

              {/* Ingredientes */}
              <h3 className="mt-4 text-lg font-medium">Ingredientes:</h3>
              <ul>
                {beer.ingredients.map((ingredient, k) => (
                  <li key={k}>
                    {ingredient.name}
                    <Image
                      src={`/assets/img/icons/${ingredient.icon}`}
                      width={40}
                      height={40}
                      alt={ingredient.name}
                    />
                  </li>
                ))}
              </ul>

              {/* Origem */}
              <h3 className="mt-4 text-lg font-medium">Origem:</h3>
              <ul>
                {beer.origin.map((origin, k) => (
                  <li key={k}>
                    {origin.name}
                    <Image
                      src={`/assets/img/icons/${origin.icon}`}
                      width={40}
                      height={40}
                      alt={origin.name}
                    />
                  </li>
                ))}
              </ul>

              {/* Notas de Degustação */}
              <h3 className="mt-4 text-lg font-medium">Notas de Degustação:</h3>
              <ul>
                {beer.tastingNotes.map((note, k) => (
                  <li key={k}>
                    {note.name}
                    <Image
                      src={`/assets/img/icons/${note.icon}`}
                      width={40}
                      height={40}
                      alt={note.name}
                    />
                  </li>
                ))}
              </ul>

              {/* Harmonização */}
              <h3 className="mt-4 text-lg font-medium">Harmonização:</h3>
              <ul>
                {beer.pairing.map((pairing, k) => (
                  <li key={k}>
                    {pairing.name}
                    <Image
                      src={`/assets/img/icons/${pairing.icon}`}
                      width={40}
                      height={40}
                      alt={pairing.name}
                    />
                  </li>
                ))}
              </ul>

              {/* Copo Ideal */}
              <h3 className="mt-4 text-lg font-medium">Copo Ideal:</h3>
              <ul>
                {beer.idealGlass.map((glass, k) => (
                  <li key={k}>
                    {glass.name}
                    <Image
                      src={`/assets/img/icons/${glass.icon}`}
                      width={40}
                      height={40}
                      alt={glass.name}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>Carregando cervejas...</p>
        )}
      </div>
    </div>
  );
}
