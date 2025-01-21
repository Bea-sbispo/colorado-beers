"use client";

import { useEffect, useState } from "react";

interface Beer {
  id: number;
  name: string;
  can_type: string;
  availableSizes: { image: string; volume: string }[];
  bitterness: string;
  alcoholContent: string;
  nutrients: { icon: string; name: string; amount: string }[];
  ingredients: { icon: string; name: string }[];
  origin: { icon: string; name: string }[];
  tastingNotes: { icon: string; name: string }[];
  pairing: { icon: string; name: string }[];
  idealGlass: { icon: string; name: string }[];
}

export default function Home() {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch("/api/beers");
        const data = await response.json();
        setBeers(data);
      } catch (error) {
        console.error("Erro ao carregar as cervejas:", error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div className="container mx-auto text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-red-500">Nossas Cervejas</h1>
      <div>
        {beers.length > 0 ? (
          beers.map((beer) => (
            <div key={beer.id} className="mb-6">
              <h2 className="text-xl font-semibold">{beer.name}</h2>
              <p>{beer.can_type}</p>
              <p>
                {beer.bitterness} | {beer.alcoholContent}
              </p>
              <h3 className="text-lg font-medium mt-2">
                Tamanhos Disponíveis:
              </h3>
              <ul>
                {beer.availableSizes.map((size) => (
                  <li key={size.image}>
                    {size.volume} -{" "}
                    <img src={`/images/${size.image}`} alt={size.volume} />
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
